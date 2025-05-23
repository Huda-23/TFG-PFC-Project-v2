// import FormAgricultor from "@/components/appComponents/agricultorPage";
// import WizardSidebar from "@/components/appComponents/wizardSidebarAgr";
import WizardAgricultor from "@/components/appComponents/agricultorPagesYSteps/wizardAgricultor";

export default function AgricultorPage() {
  return (
    <main className="p-4 bg-gray-50 mt-0 pt-0 min-h-[calc(100vh-152px)] flex flex-col justify-between">
      {/* <WizardSidebar /> */}
      {/* <FormAgricultor /> */}
      <WizardAgricultor />
    </main>
  );
}
