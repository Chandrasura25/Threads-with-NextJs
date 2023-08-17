import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
function Topbar() {
  const isUserLoggedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold max-xs:hidden text-light-1">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
             <div className="flex cursor-pointer">
              <Image src="/assets/logout.svg" height={24} width={24} alt="logout" />
             </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
        appearance={{
          elements:{
            organizationSwitcherTrigger:"py-2 px-4"
          }
        }}
        />
      </div>
    </nav>
  );
}
export default Topbar;
