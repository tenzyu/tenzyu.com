import React from "react";
import Section from "./section";
import Image from "./image";

const histories = [
  {
    name: "河原電子ビジネス専門学校",
    from: "Apr 2021",
    until: "",
    period: "",
    filename: "ai.png",
  },
  {
    name: "松山工業高等学校",
    from: "Apr 2018",
    until: "Mar 2021",
    period: "3 years",
    filename: "school.png",
  },
  {
    name: "デジタル・インフォメーション・テクノロジー（株）",
    from: "Internship",
    until: "Oct 2019",
    period: "4 days",
    filename: "company.png",
  },
  {
    name: "松山市立三津浜中学校",
    from: "Apr 2015",
    until: "Mar 2018",
    period: "3 years",
    filename: "apple-book.png",
  },
  {
    name: "松山市立三津浜小学校",
    from: "Apr 2014",
    until: "Mar 2015",
    period: "1 year",
    filename: "pencil.png",
  },
  {
    name: "板橋区立北野小学校",
    from: "Apr 2010",
    until: "Mar 2014",
    period: "4 years",
    filename: "pencil.png",
  },
  {
    name: "足立区立五反野小学校",
    from: "Apr 2009",
    until: "Mar 2010",
    period: "1 year",
    filename: "pencil.png",
  },
];

const Histories = () => (
  <Section title="History">
    <div class="mb-3">
      <ul class="space-y-3">
        {histories.map((history) => (
          <li class="flex">
            <div class="rounded-full border border-gray-400 min-w-12 w-12 h-12 flex justify-center items-center mr-2">
              <Image
                className="w-4"
                filename={history.filename}
                alt={history.filename}
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

export default Histories;
