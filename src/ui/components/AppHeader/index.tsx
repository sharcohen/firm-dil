export const AppHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center bg-grayscale-600">
      <h1 className="py-7 text-grayscale-100 font-mulish text-22 font-light">
        {title}
      </h1>
    </div>
  )
}
