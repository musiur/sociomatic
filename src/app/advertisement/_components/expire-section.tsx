"use client";
import { Button } from "@/components/ui/button";
import { Play, Lock, Coins } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ExpireSection = () => {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;

        return {
          hours: newHours >= 0 ? newHours : 23,
          minutes: newMinutes >= 0 ? newMinutes : 59,
          seconds: newSeconds >= 0 ? newSeconds : 59,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-tr from-primary to-secondary text-white py-16">
      <div className="container section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl font-bold">
              Only 15 Spots Left This Month
              <br />
              Claim Your $300/Month Slot Now
            </h2>

            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-sm mb-4">OFFER EXPIRES IN</p>
              <div className="flex gap-4">
                <div className="bg-white/30 rounded p-3 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">{time.hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-white/30 rounded p-3 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">{time.minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-white/30 rounded p-3 text-center min-w-[80px]">
                  <div className="text-2xl font-bold">{time.seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
            </div>

            <Link href="/#calendly" className="inline-block">
              <Button variant="outline">Get a Free Consultation</Button>
            </Link>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5" />
                <span>90 Days money back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>Secure payment</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 aspect-video bg-white/40 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-primary-light/90 transition-colors">
            <iframe
              className="w-full min-h-[400px] rounded-2xl mx-auto"
              src={
                "https://www.youtube.com/embed/eRxKwyhM59U?si=R66bAMX4xLgmqoCf"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpireSection;
