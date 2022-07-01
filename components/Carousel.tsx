const Carousel: React.FC<{}> = ({}) => {
  return (
    <div className="mb-32 px-24">
      <div className="relative">
        <div className="relative bg-secondarybg pb-[55.3%]">
          <div className="absolute inset-0 border border-primary">content here</div>
          <div className="absolute inset-x-0 inset-y-1/2 -translate-y-1/2 w-full h-1/4 flex justify-between items-center">
            <span
              role="button"
              title="Previous"
              className="
              h-4
              w-4
              border-primary
              w-16
              h-16
              border-primary
              border-l-[5px]
              border-b-[5px]
              rotate-45
              -translate-x-full
              relative
              before:content-['']
              before:absolute
              before:top-2.5
              before:right-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-l-[5px]
              before:border-b-[5px]
              before:border-secondary"
            ></span>
            <span
              role="button"
              title="Next"
              className="
              h-4
              w-4
              border-primary
              w-16
              h-16
              border-primary
              border-r-[5px]
              border-t-[5px]
              rotate-45
              translate-x-full
              relative
              before:content-['']
              before:absolute
              before:bottom-2.5
              before:left-2.5
              before:block
              before:w-full
              before:h-full
              before:box-content
              before:border-r-[5px]
              before:border-t-[5px]
              before:border-secondary"
            ></span>
          </div>
        </div>
        <div>navigation here</div>
      </div>
    </div>
  );
};

export default Carousel;
