"use client"

import {Admin, Resource} from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"

import {CourseList} from "@/app/admin/course/list";
import {CourseCreate} from "@/app/admin/course/create";
import {CourseEdit} from "@/app/admin/course/edit";

import {UnitList} from "@/app/admin/unit/list";
import {UnitCreate} from "@/app/admin/unit/create";
import {UnitEdit} from "@/app/admin/unit/edit";

import {LessonList} from "@/app/admin/lesson/list";
import {LessonCreate} from "@/app/admin/lesson/create";
import {LessonEdit} from "@/app/admin/lesson/edit";

import {ChallengeList} from "@/app/admin/challenge/list";
import {ChallengeCreate} from "@/app/admin/challenge/create";
import {ChallengeEdit} from "@/app/admin/challenge/edit";

import {ChallengeOptionList} from "@/app/admin/challengeOption/list";
import {ChallengeOptionCreate} from "@/app/admin/challengeOption/create";
import {ChallengeOptionEdit} from "@/app/admin/challengeOption/edit";

const dataProvider = simpleRestProvider("/api")

const App = () => {

    return(
        <Admin dataProvider={dataProvider}>
            <Resource
                name="courses"
                list={CourseList}
                create={CourseCreate}
                edit={CourseEdit}
                recordRepresentation="title"
            />
            <Resource
                name="units"
                list={UnitList}
                create={UnitCreate}
                edit={UnitEdit}
                recordRepresentation="title"
            />
            <Resource
                name="lessons"
                list={LessonList}
                create={LessonCreate}
                edit={LessonEdit}
                recordRepresentation="title"
            />
            <Resource
                name="challenges"
                list={ChallengeList}
                create={ChallengeCreate}
                edit={ChallengeEdit}
                recordRepresentation="question"
            />
            <Resource
                name="challengeOptions"
                list={ChallengeOptionList}
                create={ChallengeOptionCreate}
                edit={ChallengeOptionEdit}
                recordRepresentation="text"
                options={{label: "Challenge Options"}}
            />
        </Admin>
    )

}

export default App