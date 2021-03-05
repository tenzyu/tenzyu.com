import React from "react";
import Section from "./section";
import Image from "./image";

const histories = [
  {
    name: "松山工業高等学校",
    from: "Apr 2018",
    until: "Mar 2021",
    period: "3 years",
  },
  {
    name: "松山市立三津浜中学校",
    from: "Apr 2015",
    until: "Mar 2018",
    period: "3 years",
  },
  {
    name: "松山市立三津浜小学校",
    from: "Apr 2014",
    until: "Mar 2015",
    period: "1 year",
  },
  {
    name: "板橋区立北野小学校",
    from: "Apr 2010",
    until: "Mar 2014",
    period: "4 years",
  },
  {
    name: "足立区立五反野小学校",
    from: "Apr 2009",
    until: "Mar 2010",
    period: "1 year",
  },
];

const EducationalBackground = () => (
  <Section title="Educational Background">
    <div class="mb-3">
      <ul class="space-y-3">
        {histories.map((history) => (
          <li class="flex">
            <div class="rounded-full border border-gray-400 w-16 h-16 flex justify-center items-center mr-2">
              <Image
                className="w-4"
                filename="education.png"
                alt="education mark"
              />
            </div>
            <div class="flex items-center">
              <div>
                <h1 class="text-lg">{history.name}</h1>
                <div>
                  {history.from} - {history.until}　{history.period}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default EducationalBackground;
