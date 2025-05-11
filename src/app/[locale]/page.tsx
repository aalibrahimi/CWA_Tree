"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LinkTree() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const links = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/105591750/admin/dashboard/",
      icon: <Linkedin className="h-5 w-5" />,
      color: "bg-[#0077B5]",
    },
    {
      title: "GitHub",
      url: "https://github.com/CodeWithAli-Co",
      icon: <Github className="h-5 w-5" />,
      color: "bg-[#333]",
    },
    // {
    //   title: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: <Twitter className="h-5 w-5" />,
    //   color: "bg-[#1DA1F2]",
    // },
    {
      title: "Portfolio",
      url: "https://www.codewithali.com/portfolio",
      icon: <ExternalLink className="h-5 w-5" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Website",
      url: "https://www.codewithali.com/",
      icon: <ExternalLink className="h-5 w-5" />,
      color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    },
    {
      title: "Contact Me",
      url: "mailto:unfold@codewithali.com",
      icon: <Mail className="h-5 w-5" />,
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 p-4 md:p-8">
      <Card className="w-full max-w-md overflow-hidden bg-black/20 backdrop-blur-lg border-none">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <Avatar className="h-24 w-24 border-2 border-white/20">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-xl">
                 CWA
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="space-y-2 text-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white"
              >
                CODEWITHALI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-slate-300"
              >
               Website Development Company
              </motion.p>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="w-full space-y-3">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className={`relative w-full justify-start gap-2 overflow-hidden text-white ${
                        hoveredIndex === index ? link.color : "bg-white/10"
                      } transition-all duration-300 hover:text-white`}
                    >
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 -z-10"
                          initial={{ x: "-100%" }}
                          animate={{ x: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                      {link.icon}
                      <span>{link.title}</span>
                      <motion.div animate={{ x: hoveredIndex === index ? 5 : 0 }} className="ml-auto">
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center text-xs text-slate-400"
      >
        © {new Date().getFullYear()} CODEWITHALI 
      </motion.footer>
    </div>
  )
}
