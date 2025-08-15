"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TextRevealSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !cursorRef.current) return;

    // Get all text spans for typewriter effect
    const textSpans = textRef.current.querySelectorAll("span");
    let allWords: HTMLElement[] = [];
    let totalWords = 0;

    // Process all text spans and collect words
    textSpans.forEach((span) => {
      const text = span.textContent || "";
      const words = text.split(" ");

      // Clear the span content
      span.innerHTML = "";

      // Add each word with transparent color initially
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + (wordIndex < words.length - 1 ? " " : "");
        // Set first word to be filled initially, rest transparent
        if (wordIndex === 0) {
          wordSpan.style.color = "#fff";
          wordSpan.style.webkitTextStroke = "1px #fff";
        } else {
          wordSpan.style.color = "transparent";
          wordSpan.style.webkitTextStroke = "1px #fff";
        }
        span.appendChild(wordSpan);
        allWords.push(wordSpan);
        totalWords++;
      });
    });

    // Set initial cursor position to the end of the first word (which is already filled)
    if (allWords.length > 0) {
      const firstWord = allWords[0];
      const firstWordRect = firstWord.getBoundingClientRect();
      const textRect = textRef.current?.getBoundingClientRect();
      if (textRect && cursorRef.current) {
        gsap.set(cursorRef.current, {
          x: firstWordRect.left - textRect.left + firstWordRect.width + 5,
          y: firstWordRect.top - textRect.top - 20,
        });
      }
    }

    // Function to reset animation state
    const resetAnimation = () => {
      // Kill any existing animations first
      gsap.killTweensOf(allWords);
      gsap.killTweensOf(cursorRef.current);

      // Reset all words to transparent except first
      allWords.forEach((word, index) => {
        if (index === 0) {
          gsap.set(word, { color: "#fff" });
        } else {
          gsap.set(word, { color: "transparent" });
        }
      });

      // Reset cursor to first word position
      if (allWords.length > 0) {
        const firstWord = allWords[0];
        const firstWordRect = firstWord.getBoundingClientRect();
        const textRect = textRef.current?.getBoundingClientRect();
        if (textRect && cursorRef.current) {
          gsap.set(cursorRef.current, {
            x: firstWordRect.left - textRect.left + firstWordRect.width + 5,
            y: firstWordRect.top - textRect.top - 20,
            rotation: 0,
          });
        }
      }
    };

    // Function to play the complete animation
    const playAnimation = () => {
      // Kill any existing animations first
      gsap.killTweensOf(allWords);
      gsap.killTweensOf(cursorRef.current);

      const tl = gsap.timeline();

      // Fill words progressively one by one
      allWords.forEach((word, index) => {
        if (index === 0) return; // Skip first word as it's already filled

        // Calculate the start time based on when the previous word finishes
        const startTime = (index - 1) * 0.6; // Each word takes 0.6s, so next starts when previous ends

        // Fill the word progressively
        tl.to(
          word,
          {
            color: "#fff",
            duration: 0.6,
            ease: "none",
          },
          startTime
        );

        // Move cursor to the end of this word
        tl.to(
          cursorRef.current,
          {
            x: () => {
              const wordRect = word.getBoundingClientRect();
              const textRect = textRef.current?.getBoundingClientRect();
              if (textRect) {
                return wordRect.left - textRect.left + wordRect.width + 5;
              }
              return 0;
            },
            y: () => {
              const wordRect = word.getBoundingClientRect();
              const textRect = textRef.current?.getBoundingClientRect();
              if (textRect) {
                return wordRect.top - textRect.top - 16;
              }
              return 0;
            },
            duration: 0.6,
            ease: "linear",
          },
          startTime // Start cursor movement at the same time as word filling
        );
      });

      // Calculate when the last word animation finishes
      const lastWordFinishTime = (totalWords - 1) * 0.6;

      // Final animation: rotate cursor to horizontal and position below text center
      tl.to(
        cursorRef.current,
        {
          rotation: 90,
          x: () => {
            const width = textRef.current?.clientWidth;
            if (width) {
              return width / 2 - 20; // Center horizontally, 20px offset for cursor width
            }
            return 0;
          },
          y: () => {
            const height = textRef.current?.clientHeight;
            if (height) {
              return height + 20; // Below the text, 20px gap
            }
            return 0;
          },
          duration: 0.8,
          ease: "power2.out",
        },
        lastWordFinishTime // Start after the last word animation completes
      );

      return tl;
    };

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Reset first, then play animation
          resetAnimation();
          // Small delay to ensure reset is complete
          setTimeout(() => {
            playAnimation();
          }, 50);
        },
        onEnterBack: () => {
          // Reset first, then play animation
          resetAnimation();
          // Small delay to ensure reset is complete
          setTimeout(() => {
            playAnimation();
          }, 50);
        },
        onLeave: () => {
          // Reset animation when leaving the section
          resetAnimation();
        },
        onLeaveBack: () => {
          // Reset animation when leaving from top
          resetAnimation();
        },
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex relative justify-center items-center w-full min-h-screen"
    >
      <div className="max-w-[1400px] relative mx-auto px-4 w-full flex justify-center items-center min-h-screen">
        <div className="relative">
          <h2
            ref={textRef}
            className="text-4xl lg:text-6xl xl:text-[86px] font-medium text-center tracking-normal !leading-normal [font-family:'OwnersTRIAL-Medium',Helvetica]"
          >
            <span>We</span>
            <span>
              {" "}
              help ambitious tech scale-ups thrive, through design and&nbsp;
              <br />
              development{" "}
            </span>
          </h2>

          <div
            ref={cursorRef}
            className="absolute w-[7px] h-9 lg:h-16 xl:h-20 bg-[#6a4afd] shadow-[-20px_0px_94px_40px_#6a4afd66]"
            style={{
              left: "0px",
              top: "24px",
              transform: "translateX(0px) translateY(0px)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TextRevealSection;
