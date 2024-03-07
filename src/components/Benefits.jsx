import { benefits } from "../contsants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow"
import { GradientLight } from "./design/Benefits"
import ClipPath from "../assets/svg/ClipPath"
const Benefits = () => {
    return (
        <Section>
            <div className="container relative">

                {/* Heading [1] */}
                <Heading
                    className="md:max-w-md lg:max-w-2xl text-center"
                    title="Chat Smarter, Not Hander with Brainwave"
                />


                {/* benefits card section [2] */}
                <div className="flex justify-center flex-wrap gap-10 lg:gap-7  mb-10">
                    {benefits.map((item) => (
                        <div className="block relative p-0.5
                        bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`
                            }}
                            key={item.id}
                        >
                            <div className="relative z-2  flex flex-col min-h-[22rem] p-[2.4rem]
                            pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto ">
                                    <img src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title} />
                                    <p className="ml-auto font-code text-xs font-bold
                                     text-n-l uppercase tracking-wider">Explore more</p>
                                    <Arrow />

                                </div>
                            </div>

                            {/* Adding GradientLight to the card background [3] */}
                            {item.light && <GradientLight />}
                            {/* set the img in side the card for it. but you need to be care full about that [4] */}
                            <div className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                {/* card background over url [5] */}
                                <div className="absolute inset-0 opacity-0 transition-opacity
                                hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* ClipPath to just to see the end of my card [6] */}
                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>

        </Section>
    )
}

export default Benefits