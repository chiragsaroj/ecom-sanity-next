"use client";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from 'next/form'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Package, ShoppingCart } from "lucide-react";

export default function Header() {
  const { user, isLoaded } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2 bg-slate-100 border-b border-slate-200">
      <div>
        <Link href="/" className="text-2xl font-semibold text-blue-500 hover:opacity-50 cursor-pointer mx-auto">Logo Here</Link>
      </div>

      <Form action={'/search'} className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0">
        <Input type="text" name="query" placeholder="Search for products" className="rounded-none bg-white" />
      </Form>

      <div className="flex items-center space-x-2">
        <div className="mt-2 sm:mt-0">
          <Link href='/cart'>
            <Button className="bg-blue-500 hover:bg-blue-800 cursor-pointer rounded-none"><ShoppingCart /> Cart</Button>
          </Link>
        </div>
        <ClerkLoaded>
          {user && (
            <div className="mt-2 sm:mt-0">
              <Link href='/cart'>
                <Button className="bg-blue-500 hover:bg-blue-800 cursor-pointer rounded-none"><Package /> My Orders</Button>
              </Link>
            </div>
          )}
        </ClerkLoaded>

        {isLoaded ?
          user ? (
          <div className="flex items-center space-x-2">
            <UserButton />
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground">Welcome!</p>
              <p className="text-xs font-semibold text-primary">{user.fullName}</p>
            </div>
          </div>
        ): <SignInButton mode="modal" /> : null}
      </div>
    </header>
  )
}
