export default function CopyrightComponent() {
  const year = new Date().getFullYear();
  return (
    <div className=" bg-black text-white text-center h-20 flex items-center justify-center max-sm:text-xs">
      <p>&copy; {year} Djamet Coder. All rights reserved</p>
    </div>
  );
}
