'use client'
import NavBar from "./components/navbar";

export default function DashboardLayout({ children }) {
    return (
        <section>
            <NavBar />
            {children}
        </section>
    )
}