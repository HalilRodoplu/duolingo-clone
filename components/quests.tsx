import React from 'react';
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Progress} from "@/components/ui/progress";
import {quests} from "@/constants";


type Props = {
    points: number
}

const Quests = ({points}:Props) => {
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between w-full space-y-2">
                <h3 className="font-bold text-l">
                    Quests
                </h3>
                <Link href="/quests">
                    <Button
                        size="sm"
                        variant="primary"
                    >
                        View All
                    </Button>
                </Link>
            </div>
            <ul className="w-full space-y-4">
                {quests.map(quest => {
                    const progress = (points / quest.value) * 100;

                    return (
                        <div
                            key={quest.title}
                            className="flex items-center w-full pb-4 gap-x-3"
                        >
                            <Image
                                src="/points.svg"
                                alt="Points"
                                width={40}
                                height={40}
                            />
                            <div className="flex flex-col gap-y-2 w-full">
                                <p className="text-neutral-700 text-sm font-bold">
                                    {quest.title}
                                </p>
                                <Progress value={progress} className="h-2"/>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};

export default Quests;