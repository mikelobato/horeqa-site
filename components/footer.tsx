import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <Image
          src="/horeqa_logo_dark.svg"
          alt="horeqa.com"
          width={120}
          height={22}
          className="h-5 w-auto"
        />
        <p className="text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Horeqa. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
