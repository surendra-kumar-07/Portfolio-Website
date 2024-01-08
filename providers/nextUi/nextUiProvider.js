"use client"

import { NextUIProvider } from "@nextui-org/react";

export function NextUiproviders({children}){
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}