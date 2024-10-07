import React from "react";
import Header from "../app/components/containers/header";

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
                <div className="mt-20">
                    {children}
                </div>
        </div>
    );
}

export default Provider;