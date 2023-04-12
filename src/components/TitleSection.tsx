interface MainTitle {
  titleNumber: String;
  title: String;
}

const TitleSection = ({ titleNumber, title }: MainTitle) => {
  return (
    <h2 className='flex items-center text-2xl font-semibold'>
      <span className='mr-2 text-base text-green md:text-lg'>
        {titleNumber}
      </span>
      {title}
      <span className='ml-6 hidden h-[0.5px] bg-gray-700 md:inline-flex md:w-60 lg:w-72'></span>
    </h2>
  );
};
export default TitleSection;
