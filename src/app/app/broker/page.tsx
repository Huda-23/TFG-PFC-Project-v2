import BrokerComponent from "@/components/appComponents/brokerPagesYSteps/brokerComponent";
// No usamos el wizard porque no es necesario. (aunque lo creara anteriormente)

export default function BrookerPage() {
  return (
    <main className="p-4 bg-gray-50 mt-0 pt-0 min-h-[calc(100vh-152px)] flex flex-col justify-between">
      <BrokerComponent />
    </main>
  );
}
