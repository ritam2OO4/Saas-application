import {getCompanion} from "@/lib/actions/companion.actions";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getSubjectColor} from "@/lib/utils";
import Image from "next/image"
import {CompanionComponet} from "@/components/CompanionComponent";

interface CompanionSessionPageProps{
    params:Promise<{id:string}>
}
 const CampanionSession= async({params}:CompanionSessionPageProps) => {
    const {id} = await params
   const companion = await getCompanion(id)
     const {name,subject,title,topic,duration}=companion
     const user = await currentUser()
if(!user) redirect("/sign-in")
     if(!companion) redirect("/companions/new")

    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor:getSubjectColor(companion?.subject)}}>
                          <Image src={`/icons/${subject}.svg`} alt={subject} width={54} height={57} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">{name}</p>
                            <div className="subject-badge max-md:hidden">{subject}</div>
                        </div>
                        <p className="text-lg">{topic}</p>
                    </div>
                </div>
                <div className="text-2xl max-md:hidden">{duration} minutes</div>
            </article>
            <CompanionComponet
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    );
};
export default CampanionSession;