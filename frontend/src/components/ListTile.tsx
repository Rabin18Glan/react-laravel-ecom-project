

const ListTile = ({ title, subtitle, imageSrc, trailing,leading }:any) => {
  return (
    <div className="p-10 flex rounded-lg items-center justify-between w-96 border-b border-gray-200 py-4 bg-white shadow-custom">
      <div className="flex items-center">
        {imageSrc ? (
          <img className="w-10 h-10 rounded-full mr-4" src={imageSrc} alt={title} />
        ):leading&&<div>{leading}</div>}
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          {subtitle && <p className="text-gray-500">{subtitle}</p>}
        </div>
      </div>
      {trailing && <div className='flex'>{trailing}</div>}
    </div>
  );
};

export default ListTile;
