"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import SignOutButton from "./ui/Signout"

// Main navigation menu
function MainNavigationMenu() {
  return (
    <>
      <NavigationMenu viewport={false}>
        <div className="absolute right-175">
        <SignOutButton />
        </div>
        <NavigationMenuList>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/add">Add</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/cart">Cart</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}

// Authentication navigation menu
function AuthNavigationMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/login">Login</Link>
        </NavigationMenuLink>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/signup" className="bg-black text-white hover:bg-gray-800 hover:text-white">Signup</Link>
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// Main component
export function NavigationMenuDemo() {
  return (
    <div className="relative w-full h-16 flex items-center px-4">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <MainNavigationMenu />
      </div>
      <div className="ml-auto mr-10">
        <AuthNavigationMenu />
      </div>
    </div>
  )
}