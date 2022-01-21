import React from "react";


export default function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="max-w-sm w-[calc(50%-1.25rem)] shadow-sm h-72">
      {children}
    </div>
  )
}
