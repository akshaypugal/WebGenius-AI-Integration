import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

const Page = () => {
  return (
    <div>
      landing (unprotected)
      <div className=" h-full py-10 flex justify-center items-center">
        <Link href="/sign-in">
          <Button>
            login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
            register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
