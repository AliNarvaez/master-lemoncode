import React, { useState } from "react";
import { OrganizationContext } from "./organization.context";

const OrganizationProvider = ({ children }) => {
    const [organization, setOrganization] = useState('lemoncode');
  
    return (
      <OrganizationContext.Provider value={{ organization, setOrganization }}>
        {children}
      </OrganizationContext.Provider>
    );
  };
  
  export { OrganizationProvider, OrganizationContext };