import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
interface Companion {
    id: number,
    subject: string,
    name:string,
    topic: string,
    duration: number,
    color: string,
}

interface companionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({title,companions,classNames}: companionListProps) => {
    return (
        <article className={clsx('companion-list', classNames)}>
    <h2 className="font-bold text-3xl">
    Recent Sessions
    </h2>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="text-lg w-2/3">Lessons</TableHead>
                <TableHead className="text-lg">Subject</TableHead>
                <TableHead className="text-lg">Duration</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {companions?.map((companion) => (
                <TableRow key={companion.id}>
                    <TableCell className="font-medium">
                        <Link href={`/companions/${companion.id}`}>
                        <div className="flex items-center gap-2">
                            <div className="size-[72px] flex items-center justify-center rounded-full max-md:hidden"
                            style={{backgroundColor : companion.color}}>
                                <Image src={`/icons/${companion.subject}.svg`} alt={companion.subject} width={35} height={35}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-bold text-lg">{companion.name}</p>
                                <p className="text-sm">{companion.topic}</p>
                            </div>
                        </div>
                        </Link>
                        </TableCell>
                    <TableCell>
                        <div className="subject-badge w-fit max-md:hidden">
                            {companion.subject}
                        </div>
                    <div className="flex items-center justify-center rounded-lg p-2 md:hidden w-fit" style={{backgroundColor:companion.color}}>
                        <Image src={`/icons/${companion.subject}.svg`} alt={companion.subject} width={18} height={18}/>
                    </div>
                    </TableCell>
                    <TableCell>
                        <div className="flex items-center gap-2 w-full">
                            <p className="text-xl">{companion.duration} {' '}
                            <span className="max-md:hidden ">mins.</span>
                            </p>
                            <Image src="/icons/clock.svg" alt="clock" width={13.5} height={13.5} className="md:hidden"/>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</article>
    );
};

export default CompanionList;