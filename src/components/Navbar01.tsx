"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
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
  )
}
