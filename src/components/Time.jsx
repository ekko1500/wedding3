const data = [
  {
    title: "မင်္ဂလာနေ့ရက်",
    description:
      "Suspendisse nec dui ut turpis posuere sagittis viverra tinciduntlectus. Sed faucibus tristique purus, ac mattis lorem malesuada vel.Sed dignissim, orci eu porttitor suscipit, dolor mauris elementum dolor, eget posuere dui ante vel quam. Donec ut lacinia est, etconvallis augue.",
  },
  {
    title: "မင်္ဂလာအချိန်",
    description:
      "Suspendisse nec dui ut turpis posuere sagittis viverra tincidunt lectus. Sed faucibus tristique purus, ac mattis lorem malesuada vel. Sed dignissim, orci eu porttitor suscipit, dolor mauris elementumdolor, eget posuere dui ante vel quam. Donec ut lacinia est, etconvallis augue.",
  },
  {
    title: "မင်္ဂလာနေရာ",
    description:
      "Suspendisse nec dui ut turpis posuere sagittis viverra tinciduntlectus. Sed faucibus tristique purus, ac mattis lorem malesuada vel. Sed dignissim, orci eu porttitor suscipit, dolor mauris elemdolor, eget posuere dui ante vel quam. Donec ut lacinia est, et convallis augue.",
  },
];

function Time() {
  return (
    <div className="  w-full flex flex-col items-center  gap-4 text-center  bg-brown-200 relative p-10">
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Time;
