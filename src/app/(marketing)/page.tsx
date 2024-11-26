import React from "react";
import { Container, Icons, SectionTitle, Wrapper } from "@/components";
import { ArrowLeft, ChevronLeft, User, Zap, } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { features, perks, pricingCards, reviews } from "@/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { LampContainer } from "@/components/ui/lamp";
import { Input } from "@/components/ui/input";

const HomePage = () => {

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);


    return (
        <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
            {/* HERO */}
            <Wrapper>
                {/* GRID BG */}
                <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

                <Container>
                    <div className="w-full flex flex-col items-center justify-center py-10 ">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                            <span className="z-10 py-0.5 text-neutral-100 flex items-center justify-center gap-1.5">
                                <Image src="/icons/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                                معرفی نرم افزار رایکا
                                <ChevronLeft className="w-4 h-4" />
                            </span>
                        </button>

                        <div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
                            <h1 className="text-4xl md:text-5xl md:!leading-snug font-Dana-Bold  text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                                ایده‌هایت را زنده کن، وب‌سایت رؤیایی‌ات را با ما بساز!
                            </h1>
                            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                                بدون کدنویسی، و نهایت سرعت!
                                سایت‌های حرفه‌ای را با سهولت، سرعت و بهترین عملکرد و سئو خلق کنید.
                            </p>

                            <div className="hidden md:flex relative  items-center justify-center mt-8 md:mt-12 w-full">
                                <Link href={'/'} className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none">
                                    <p className="text-foreground text-sm text-center md:text-base pl-4 pr-4 lg:marker:pr-0">
                                        ✨ {"  "}  همین الان شروع به ساخت وب سایت رویایی خود کنید!
                                    </p>
                                    <Button size={'sm'} className=" rounded-full hidden lg:flex border border-foreground/20 ">
                                        بزن بریم
                                        <ArrowLeft className="w-4 h-4 mr-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
                            <div className="absolute top-1/2 right-1/2 -z-10 gradient w-3/4 translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]">
                            </div>
                            <div className="-m-2 md:-m-4 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-lg">
                                <Image src='/assets/dashboard.svg' alt="dashborad" width={1000} height={1000}
                                    className="rounded-xl lg:rounded-2xl bg-foreground/10 shadow-2xl ring-1 ring-border"
                                />
                                <BorderBeam
                                    size={200}
                                    duration={12}
                                    delay={9}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* How Its Work */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <SectionTitle
                        badgeTitle="فرآیند خرید"
                        title="سه مرحله برای ساختن وبسایت رویایی خود"
                        description="تنها با 3 مرحله ساده، دید خود را به واقعیت تبدیل کنید"
                    />
                </Container>
                <Container>
                    <div className="flex items-center justify-center flex-col py-10 md:py-20 w-full">
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-y md:divide-y-0 divide-gray-900 border-gray-900">
                            {perks.map((perk) => (
                                <div key={perk.title} className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6">
                                    <div className="flex items-center justify-center">
                                        <perk.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-Dana-Bold mt-4">
                                        {perk.title}
                                    </h3>
                                    <p className=" text-muted-foreground mt-2 text-start">{perk.info}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Features */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <SectionTitle
                        badgeTitle="قابلیت ها"
                        title=" ویژگی های قدرتمند ما را کشف کنید"
                        description="Astra طیف وسیعی از ویژگی ها را ارائه می دهد تا به شما کمک کند در کمترین زمان یک وب سایت خیره کننده بسازید"
                    />
                </Container>
                <Container>
                    <div className="flex items-center justify-center mx-auto mt-8">
                        <Icons.feature className="w-auto h-80" />
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start px-0 ">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* pricing */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
                <Container>
                    <SectionTitle
                        badgeTitle="پلان ها"
                        title="پلان مناسب برای کسب و کار خود را باز کنید "
                        description="بهترین طرح را برای کسب و کار خود انتخاب کنید و از همین امروز شروع به ساخت وب سایت رویایی خود کنید"
                    />
                </Container>
                <Container>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
                            {pricingCards.map((card) => (
                                <Card key={card.title}
                                    className={cn("flex flex-col w-full border-neutral-700 ", card.title === 'نامحدود SaaS' && "border-2 border-primary")}
                                >
                                    <CardHeader className="border-b-2 border-border">
                                        <span>{card.title}</span>
                                        <CardTitle className={cn(card.title !== 'نامحدود SaaS' && 'text-muted-foreground')}>
                                            {card.price}
                                        </CardTitle>
                                        <CardDescription>
                                            {card.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-6 space-y-3">
                                        {card.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 fill-primary text-primary" />
                                                <p>{feature}</p>
                                            </div>
                                        ))}
                                    </CardContent>

                                    <CardFooter className="mt-auto w-full" >
                                        <Link href={'/'} className={cn('w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium', card.title !== 'نامحدود SaaS' && '!bg-foreground !text-background')}>
                                            {card.buttonText}
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                            )}
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* testimonials */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative ">
                <Container>
                    <SectionTitle
                        badgeTitle="مشتریان ما"
                        title="آنچه مردم می گویند"
                        description="ببینید چگونه Astra به مشاغل در هر اندازه قدرت می دهد. این چیزی است که افراد واقعی در توییتر می گویند"
                    />
                </Container>
                <Container>
                    <div className="py-10 md:py-20 w-full">
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                            <Marquee className="[--duration:20s] select-none">
                                {firstRow.map((review) => (
                                    <figure key={review.name} className="w-64 relative overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background ">
                                        <div className="flex flex-row items-center gap-2">
                                            <User className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-Dana-Medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-Dana-Medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {review.body}
                                        </blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <Marquee reverse className="[--duration:20s] select-none">
                                {secondRow.map((review) => (
                                    <figure key={review.name} className="w-64 relative overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background ">
                                        <div className="flex flex-row items-center gap-2">
                                            <User className="w-6 h-6" />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-Dana-Medium">
                                                    {review.name}
                                                </figcaption>
                                                <p className="text-xs font-Dana-Medium text-muted-foreground">{review.username}</p>
                                            </div>
                                        </div>
                                        <blockquote className="mt-2 text-sm">
                                            {review.body}
                                        </blockquote>
                                    </figure>
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* newsletter */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl lg:!leading-snug font-Dana-Bold mt-8">
                                از ایده تا راه اندازی <br /> سریعتر از همیشه
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                وب‌سایت‌های خیره‌کننده با سازنده بصری کشیدن و رها کردن Astra و دستیار قدرتمند هوش مصنوعی بسازید.
                            </p>
                            <Button variant='white' className="mt-6" asChild>
                                <Link href='/sign-in'>
                                    به صورت رایگان شروع کنید
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
                <Container className="relative z-[999999]">
                    <div className="flex items-center justify-center w-full -mt-40">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <h4 className="text-xl md:text-2xl font-semibold">
                                    به خبرنامه ما بپیوندید
                                </h4>
                                <p className="text-base text-muted-foreground">
                                    با همه چیز در مورد سازنده هوش مصنوعی به روز باشید
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                                <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                                    <Input
                                        required
                                        type="email"
                                        placeholder="ایمیل خود را وارد کنید"
                                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                                    />
                                    <Button type="submit" size="sm" variant="secondary" className="w-full py-2 md:w-max">
                                        عضویت
                                    </Button>
                                </form>
                                <p className="text-xs text-muted-foreground">
                                    با عضویت با ما موافقید{" "}
                                    <Link href="#">
                                        سیاست حفظ حریم خصوصی
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </section>
    )
};

export default HomePage;
