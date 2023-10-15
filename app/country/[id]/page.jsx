import { Button, CountryDescription, CountryHeader } from "@/app/components";
import React from "react";

function Country() {
  return (
    <>
      <div>
        <Button />
      </div>
      <div>
        <div>
          <CountryHeader />
        </div>
        <div>
          <CountryDescription />
        </div>
      </div>
    </>
  );
}

export default Country;
