export default function ProductsPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Marble Types</h2>
            <p className="text-gray-600">
              Explore our wide range of premium marble types from Rajasthan.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Collections</h2>
            <p className="text-gray-600">
              Browse through our curated collections of exquisite marble designs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Custom Orders</h2>
            <p className="text-gray-600">
              Get custom marble designs tailored to your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
