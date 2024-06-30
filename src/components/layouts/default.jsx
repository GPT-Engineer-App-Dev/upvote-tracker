import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <Outlet />
    </main>
  )
}

export default SharedLayout;