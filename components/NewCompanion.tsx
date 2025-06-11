import {auth} from "@clerk/nextjs/server"
import CompanionForm from './CompanionForm';
import {redirect} from "next/navigation";
import {newCompanionPermissions} from "@/lib/actions/companion.actions";
import Image from "next/image"
import Link from "next/link"
 const NewCompanion = async () => {
    const {userId} = await auth()
     if(!userId) redirect("/sign-in")

     const canCreateCompanion = await newCompanionPermissions()

     return (
        <main className="min-lg:w-1/3 min-md:w-2/3 flex justify-center items-center">
            {canCreateCompanion ? (
                <article  className="w-full gap-4 flex flex-col">
                    <h1>Companion Builder</h1>
                    <CompanionForm/>
                </article>
            ) : (
                <article className="companion-limit">
                    <Image
                    src="/images/limit.svg"
                    width={360}
                    height={230}
                    alt="companion limit reached"
                    />
                    <div className="cta-badge">
                        Upgrade your plan
                    </div>
                    <h1>You've Reached your Companion limit.</h1>
                    <p>Upgrade to create more companions and premium features.</p>
                    <Link href="/subscription" className="bt-primary w-full justify-center">Upgrade my Plan.</Link>
                </article>
            )}

        </main>
    );
};

export default NewCompanion;
