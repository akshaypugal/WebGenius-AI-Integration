import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react';

const Page = () => {
  return (
    <div>
      landing (unprotected)
      <div>
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
