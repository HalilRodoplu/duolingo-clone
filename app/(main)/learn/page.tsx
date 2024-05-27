import React from 'react';
import StickyWrapper from "@/components/sticky-wrapper";
import FeedWrapper from "@/components/feed-wrapper";
import Header from "@/app/(main)/learn/header";
import UserProgress from "@/components/user-progress";
import {getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription} from "@/db/queries";
import {redirect} from "next/navigation";
import Unit from "@/app/(main)/learn/unit";
import {lessons, units as unitsSchema } from "@/db/schema";
import Promo from "@/components/promo";
import Quests from "@/components/quests";

const LearnPage = async () => {

    const unitsData = getUnits()
    const courseProgressData = getCourseProgress()
    const lessonPercentageData = getLessonPercentage()
    const userProgressData = getUserProgress()
    const userSubscriptionData = getUserSubscription()

    const [ userProgress, units, courseProgress, lessonPercentage, userSubscription] = await Promise.all([
        userProgressData, unitsData, courseProgressData, lessonPercentageData, userSubscriptionData
    ])

    const isPro = !!userSubscription?.isActive // TODO CHANGE THIS userSubscription?.isActive


    if(!userProgress || !userProgress.activeCourse){
        redirect("/courses")
    }

    if (!courseProgress) {
        redirect("/courses")
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts= {userProgress.hearts}
                    points= {userProgress.points}
                    hasActiveSubscription={!!isPro}
                />
                {!isPro && (
                    <Promo/>
                )}
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper >
                <Header title={userProgress.activeCourse.title}/>
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit
                            id={unit.id}
                            order={unit.order}
                            description={unit.description}
                            title={unit.title}
                            lessons={unit.lessons}
                            activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {
                                unit: typeof unitsSchema.$inferSelect;
                            } | undefined}
                            activeLessonPercentage={lessonPercentage}
                        />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    );
};

export default LearnPage;