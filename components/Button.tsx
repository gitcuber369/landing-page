import React from "react";

export function Button(props: React.PropsWithChildren) {
  return (
    <div>
      {" "}
      <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-blue-950 to-blue-600 shadow-[0px_0px_12px_#2563eb]">
        <div className="absolute inset-0">
          <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg  border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="absolute inset-0 shadow[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg "></div>
        </div>
        <span>{props.children}</span>
      </button>
    </div>
  );
}