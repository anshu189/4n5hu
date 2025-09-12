import { motion } from "framer-motion";
import { AuroraBackground } from "./components/ui/aurora-background";
import { Button, Chip, Link } from "@nextui-org/react";

export function AuroraBackgroundDemo({color}) {
  return (
    (<AuroraBackground className={'relative'}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative h-full flex flex-col gap-4 items-center justify-center px-4">
          <div className="outline-none h-screen flex flex-col items-center justify-center gap-6 text-[#f7f7f7] bg-transparent outline-none">
            <div class="flex items-start gap-2 md:gap-0 ml-6">
              <h1 className="text-5xl md:text-8xl font-semibold press-start">4n5hu</h1>
              {/* <Cover className="text-5xl md:text-8xl font-semibold press-start">4n5hu</Cover> */}
              <Chip color={color} variant="dot" className="hidden md:flex">SDE</Chip>
              <Chip color={color} variant="flat" className="flex md:hidden">SDE</Chip>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl lucida">
              <a href="https://github.com/anshu189" target="_blank" rel="noreferrer">Github</a><span>|</span>
              <a href="https://www.linkedin.com/in/4n5hu" target="_blank" rel="noreferrer">Linkedin</a><span>|</span>
              <a href="https://advrtic.com" target="_blank" rel="noreferrer">Advrtic</a>
            </div>

            <Link isExternal href="https://drive.google.com/file/d/18asHcX_U85qS3By8OUyK9CHoPTOZsbum">
              <Button className="mt-4 text-md md:text-lg" color={color} variant="faded" radius="sm" endContent={<svg className="w-3 rotate-45 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>}>
                  Download Resume
              </Button>  
            </Link>
          </div>
      </motion.div>
    </AuroraBackground>)
  );
}
