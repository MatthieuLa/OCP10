import { Feature } from "../components/Features";

function FeatureList() {
  const featuresObject = [
    {
      icon: "icon-chat.webp",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      icon: "icon-money.webp",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      icon: "icon-security.webp",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <>
      {featuresObject.map((feature, index) => (
        <Feature feature={feature} key={index} />
      ))}
    </>
  );
}

export default FeatureList;
