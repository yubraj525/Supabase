import React, { useState } from 'react';
import { ShoppingCart, Search, User, Home, Package, Heart, Menu, X, TrendingUp, Star, Truck, CheckCircle, Clock, LogOut, Settings, CreditCard, MapPin, Bell, ShoppingBag, DollarSign, Award } from 'lucide-react';
import { Link } from 'react-router';
const EcommerceDashboard = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentUser, setCurrentUser] = useState({
    id: 'USER001',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2023-06-15',
    avatar: '👤',
    totalSpent: 1245.67,
    membershipLevel: 'Gold'
  });
  const [cartCount, setCartCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample product data
  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', rating: 4.5, sales: 234 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', rating: 4.8, sales: 456 },
    { id: 3, name: 'Laptop Stand', price: 49.99, image: '💻', rating: 4.3, sales: 189 },
    { id: 4, name: 'USB-C Cable', price: 19.99, image: '🔌', rating: 4.6, sales: 567 }
  ];

  const allProducts = [
    { id: 5, name: 'Bluetooth Speaker', price: 59.99, image: '🔊', rating: 4.4, category: 'Audio' },
    { id: 6, name: 'Phone Case', price: 24.99, image: '📱', rating: 4.2, category: 'Accessories' },
    { id: 7, name: 'Keyboard', price: 89.99, image: '⌨️', rating: 4.7, category: 'Tech' },
    { id: 8, name: 'Mouse Pad', price: 14.99, image: '🖱️', rating: 4.1, category: 'Accessories' },
    { id: 9, name: 'Webcam', price: 69.99, image: '📷', rating: 4.5, category: 'Tech' },
    { id: 10, name: 'Desk Lamp', price: 39.99, image: '💡', rating: 4.3, category: 'Home' }
  ];

  // User-specific order history
  const userOrders = [
    { 
      id: 'ORD-2024-001', 
      product: 'Wireless Headphones', 
      status: 'delivered', 
      date: '2024-01-15',
      total: 79.99,
      quantity: 1,
      image: '🎧',
      trackingSteps: [
        { label: 'Order Placed', completed: true, date: '2024-01-15' },
        { label: 'Processing', completed: true, date: '2024-01-15' },
        { label: 'Shipped', completed: true, date: '2024-01-16' },
        { label: 'Out for Delivery', completed: true, date: '2024-01-18' },
        { label: 'Delivered', completed: true, date: '2024-01-18' }
      ]
    },
    { 
      id: 'ORD-2024-002', 
      product: 'Smart Watch', 
      status: 'shipped', 
      date: '2024-01-18',
      total: 199.99,
      quantity: 1,
      image: '⌚',
      trackingSteps: [
        { label: 'Order Placed', completed: true, date: '2024-01-18' },
        { label: 'Processing', completed: true, date: '2024-01-18' },
        { label: 'Shipped', completed: true, date: '2024-01-19' },
        { label: 'Out for Delivery', completed: false },
        { label: 'Delivered', completed: false }
      ]
    },
    { 
      id: 'ORD-2024-003', 
      product: 'Laptop Stand', 
      status: 'processing', 
      date: '2024-01-20',
      total: 49.99,
      quantity: 2,
      image: '💻',
      trackingSteps: [
        { label: 'Order Placed', completed: true, date: '2024-01-20' },
        { label: 'Processing', completed: true, date: '2024-01-20' },
        { label: 'Shipped', completed: false },
        { label: 'Out for Delivery', completed: false },
        { label: 'Delivered', completed: false }
      ]
    },
    { 
      id: 'ORD-2023-156', 
      product: 'Bluetooth Speaker', 
      status: 'delivered', 
      date: '2023-12-10',
      total: 59.99,
      quantity: 1,
      image: '🔊',
      trackingSteps: [
        { label: 'Order Placed', completed: true, date: '2023-12-10' },
        { label: 'Processing', completed: true, date: '2023-12-10' },
        { label: 'Shipped', completed: true, date: '2023-12-11' },
        { label: 'Out for Delivery', completed: true, date: '2023-12-13' },
        { label: 'Delivered', completed: true, date: '2023-12-13' }
      ]
    },
    { 
      id: 'ORD-2023-145', 
      product: 'Keyboard', 
      status: 'delivered', 
      date: '2023-11-25',
      total: 89.99,
      quantity: 1,
      image: '⌨️',
      trackingSteps: [
        { label: 'Order Placed', completed: true, date: '2023-11-25' },
        { label: 'Processing', completed: true, date: '2023-11-25' },
        { label: 'Shipped', completed: true, date: '2023-11-26' },
        { label: 'Out for Delivery', completed: true, date: '2023-11-28' },
        { label: 'Delivered', completed: true, date: '2023-11-28' }
      ]
    }
  ];

  // User saved addresses
  const savedAddresses = [
    { 
      id: 1, 
      type: 'Home', 
      address: '123 Main St, Apartment 4B', 
      city: 'New York',
      state: 'NY',
      zip: '10001',
      isDefault: true 
    },
    { 
      id: 2, 
      type: 'Work', 
      address: '456 Business Ave, Suite 200', 
      city: 'New York',
      state: 'NY',
      zip: '10002',
      isDefault: false 
    }
  ];

  // User payment methods
  const paymentMethods = [
    { id: 1, type: 'Visa', last4: '4242', expiryDate: '12/25', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8888', expiryDate: '06/26', isDefault: false }
  ];

  // User wishlist
  const wishlist = [
    { id: 11, name: 'Gaming Mouse', price: 79.99, image: '🖱️', rating: 4.6 },
    { id: 12, name: 'Monitor Stand', price: 45.99, image: '🖥️', rating: 4.4 },
    { id: 13, name: 'Wireless Charger', price: 29.99, image: '🔋', rating: 4.5 }
  ];

  const HomePage = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome back, {currentUser.fullName.split(' ')[0]}!</h1>
        <p className="text-lg mb-6">Discover amazing products at great prices</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-6xl mb-4 text-center">{product.image}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{product.rating}</span>
                <span className="text-sm text-gray-400">({product.sales} sold)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{product.image}</div>
                <button className="text-gray-400 hover:text-red-500 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{product.category}</span>
              <h3 className="font-semibold text-gray-800 mt-2 mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const OverviewTab = () => (
      <div className="space-y-6 ">
        {/* User Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center md:items-start gap-6 justify-between ">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{currentUser.avatar}</div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{currentUser.fullName}</h2>
              <p className="text-gray-600">{currentUser.email}</p>
              <p className="text-sm text-gray-500 mt-1">Member since {new Date(currentUser.joinDate).toLocaleDateString()}</p>
              <div className="flex items-center gap-2 mt-3">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-yellow-600">{currentUser.membershipLevel} Member</span>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 transition">
              <Settings className="w-6 h-6" />
            </button>
             <Link to={'/'}>
             <button className='text-red-400 cursor-pointer' > Log Out</button>
             </Link>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-gray-800">{userOrders.length}</p>
              </div>
              <Package className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">In Transit</p>
                <p className="text-2xl font-bold text-gray-800">
                  {userOrders.filter(o => o.status === 'shipped' || o.status === 'processing').length}
                </p>
              </div>
              <Truck className="w-12 h-12 text-orange-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Delivered</p>
                <p className="text-2xl font-bold text-gray-800">
                  {userOrders.filter(o => o.status === 'delivered').length}
                </p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-2xl font-bold text-gray-800">${currentUser.totalSpent}</p>
              </div>
              <DollarSign className="w-12 h-12 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Recent Orders Preview */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {userOrders.slice(0, 3).map(order => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{order.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{order.product}</h4>
                    <p className="text-sm text-gray-600">{order.id} • {order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">${order.total}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-600' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    const OrdersTab = () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Order History</h2>
        {userOrders.map(order => (
          <div key={order.id} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{order.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{order.product}</h3>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-600">Date: {order.date}</p>
                  <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-600">${order.total}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                  order.status === 'delivered' ? 'bg-green-100 text-green-600' :
                  order.status === 'shipped' ? 'bg-blue-100 text-blue-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="mt-6 relative">
              <div className="flex items-start justify-between">
                {order.trackingSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 relative z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                    }`}>
                      {step.completed ? <CheckCircle className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center max-w-20">{step.label}</p>
                    {step.date && <p className="text-xs text-gray-400">{step.date}</p>}
                  </div>
                ))}
              </div>
              {/* Connection Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0" style={{ width: 'calc(100% - 40px)', left: '20px' }}>
                <div 
                  className="h-full bg-blue-600 transition-all duration-500"
                  style={{ width: `${(order.trackingSteps.filter(s => s.completed).length - 1) / (order.trackingSteps.length - 1) * 100}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                Track Order
              </button>
              {order.status === 'delivered' && (
                <>
                  <button className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition text-sm">
                    Buy Again
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm">
                    Leave Review
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    );

    const WishlistTab = () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">My Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{item.image}</div>
                <button className="text-red-500 hover:text-red-600 transition">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{item.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">${item.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const AddressesTab = () => (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Saved Addresses</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            + Add New Address
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedAddresses.map(address => (
            <div key={address.id} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{address.type}</h3>
                    {address.isDefault && (
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded mb-2">
                        Default
                      </span>
                    )}
                    <p className="text-gray-600 text-sm">{address.address}</p>
                    <p className="text-gray-600 text-sm">{address.city}, {address.state} {address.zip}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 border border-blue-600 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition text-sm">
                  Edit
                </button>
                <button className="flex-1 border border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const PaymentsTab = () => (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Payment Methods</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
            + Add Payment Method
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map(method => (
            <div key={method.id} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <CreditCard className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{method.type}</h3>
                    {method.isDefault && (
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded mb-2">
                        Default
                      </span>
                    )}
                    <p className="text-gray-600 text-sm">•••• •••• •••• {method.last4}</p>
                    <p className="text-gray-500 text-xs mt-1">Expires {method.expiryDate}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 border border-blue-600 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition text-sm">
                  Edit
                </button>
                <button className="flex-1 border border-gray-300 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition text-sm">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-blue-100">Manage your orders, wishlist, and account settings</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow">
          <div className="flex flex-wrap border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'orders'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'wishlist'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Wishlist
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'addresses'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Addresses
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-6 py-3 font-medium transition ${
                activeTab === 'payments'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Payments
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'wishlist' && <WishlistTab />}
          {activeTab === 'addresses' && <AddressesTab />}
          {activeTab === 'payments' && <PaymentsTab />}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ShopHub</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                  currentView === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="relative text-gray-600 hover:text-blue-600 transition">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="text-gray-600 hover:text-blue-600 transition"
              >
                <User className="w-6 h-6" />
              </button>
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <button 
                onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                  currentView === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
              <button 
                onClick={() => { setCurrentView('dashboard'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                  currentView === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
                }`}
              >
                <User className="w-5 h-5" />
                <span>My Dashboard</span>
              </button>
              <div className="relative pt-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'home' ? <HomePage /> : <UserDashboard />}
      </main>
    </div>
  );
};

export default EcommerceDashboard;