# 🎯 Sellspot

> An AI-powered local social commerce platform that transforms buying and selling through intelligent content generation, smart pricing, and location-based discovery.

**🏷️ Tagline**: "Your smart spot for local deals"

## 🌟 The Vision

Transform the way people buy and sell locally by eliminating the friction of creating compelling listings. Sellspot uses artificial intelligence to automatically generate professional titles, descriptions, and price suggestions while providing an intuitive map-based discovery experience that connects neighbors and builds communities.

## 🚀 What Makes Sellspot Special

### 🧠 **AI-First Approach**

- **Smart Content Generation**: Simply upload a photo and say a few keywords - AI creates professional titles and descriptions
- **Intelligent Pricing**: AI analyzes local market data to suggest optimal prices based on category, condition, and regional trends
- **Auto-Categorization**: Advanced AI automatically tags and categorizes items for better discoverability
- **Photo Enhancement**: Optional AI-powered photo improvement to make listings more attractive

### 🗺️ **Location-Centric Discovery**

- **Live Interactive Maps**: Browse all listings on a real-time clustered map interface
- **Proximity-Based Filtering**: Find items within walking distance or expand your search radius
- **Neighborhood Insights**: See market trends and popular categories in your area

### 💬 **Seamless Communication**

- **Real-Time Chat**: Instant messaging with typing indicators and read receipts
- **Smart Notifications**: Get notified about new messages, price drops, and nearby listings
- **Conversation History**: All chats saved securely for easy reference

## 🛠️ Technical Architecture

| Layer              | Technology                    | Purpose                                              |
| ------------------ | ----------------------------- | ---------------------------------------------------- |
| **Frontend**       | React.js + Apollo Client      | Modern, responsive UI with GraphQL integration       |
| **Backend**        | PHP (Laravel/Native)          | Robust server-side logic and API endpoints           |
| **API Layer**      | webonyx/graphql-php           | Type-safe GraphQL server implementation              |
| **AI Engine**      | OpenAI API + Replicate        | Content generation and image processing              |
| **Database**       | MySQL                         | Reliable data storage for users, listings, and chats |
| **Maps**           | Leaflet/Mapbox                | Interactive mapping and geospatial queries           |
| **Authentication** | JWT + Laravel Passport        | Secure user sessions and API access                  |
| **Real-time**      | WebSockets/Server-Sent Events | Live chat and notifications                          |

## 📁 Project Structure

```
📂 /client                 → React.js frontend (Vite + TypeScript)
  ├── 📁 /src/components   → Reusable UI components
  ├── 📁 /src/pages        → Route-based page components
  ├── 📁 /src/graphql      → Apollo Client setup and queries
  ├── 📁 /src/hooks        → Custom React hooks
  └── 📁 /src/utils        → Helper functions and constants

📂 /server                 → PHP backend (Laravel framework)
  ├── 📁 /app/Models       → Eloquent models for database entities
  ├── 📁 /app/GraphQL      → GraphQL resolvers and mutations
  ├── 📁 /app/Services     → Business logic and external API integrations
  └── 📁 /app/Http         → Traditional REST endpoints (if needed)

📂 /graphql                → GraphQL schema definitions
  ├── 📄 schema.graphql    → Type definitions and queries
  ├── 📁 /resolvers        → Query and mutation resolvers
  └── 📁 /types            → Custom scalar types and unions

📂 /ai                     → AI integration layer
  ├── 📁 /prompts          → AI prompt templates
  ├── 📁 /services         → OpenAI and Replicate integrations
  └── 📁 /models           → AI model configurations

📂 /database               → Database management
  ├── 📁 /migrations       → Database schema changes
  ├── 📁 /seeders          → Sample data for development
  └── 📁 /factories        → Model factories for testing

📂 /docs                   → Documentation and guides
  ├── 📁 /api              → GraphQL API documentation
  ├── 📁 /architecture     → System design diagrams
  └── 📁 /deployment       → Setup and deployment guides
```

## ✨ Core Features

### 👤 **User Management**

- **Secure Registration**: Email verification with JWT-based authentication
- **Smart Profiles**: Ratings, reviews, and listing history
- **Location Services**: GPS auto-detection or manual address input
- **Privacy Controls**: Control visibility of personal information

### 📦 **Intelligent Listing Management**

- **AI-Assisted Creation**: Generate professional listings from minimal input
- **Rich Media Support**: Upload up to 10 high-quality images per listing
- **Dynamic Pricing**: Real-time price suggestions based on market data
- **Status Management**: Track views, inquiries, and mark items as sold
- **Category Intelligence**: Auto-categorization with relevant tags

### 🗺️ **Map-Based Discovery**

- **Interactive Clusters**: Smooth map experience with item clustering
- **Advanced Filtering**: Distance, price range, category, and AI tags
- **Quick Previews**: Instant listing previews without leaving the map
- **Route Planning**: Integration with navigation apps for pickup

### 💬 **Communication Hub**

- **Instant Messaging**: Real-time chat with delivery confirmations
- **Rich Content**: Share images and location within conversations
- **Chat Organization**: Search and filter conversation history
- **Safety Features**: Report inappropriate behavior and block users

## 🎯 Detailed Requirements

### 🔐 Authentication & Security

1. **User Registration**: Email/password signup with verification links
2. **Secure Login**: JWT tokens with refresh mechanism and session timeout
3. **Profile Management**: Editable profiles with avatar upload and bio
4. **Location Setup**: GPS detection with fallback to manual address entry
5. **Rating System**: 5-star ratings with written reviews for completed transactions

### 📦 Content Management

6. **Listing Creation**: Guided listing flow with AI assistance at each step
7. **Content Editing**: Real-time editing with auto-save functionality
8. **Listing Removal**: Soft delete with option to restore within 30 days
9. **Sale Tracking**: Mark as sold with optional buyer feedback
10. **Media Management**: Image upload with compression and CDN delivery

### 🧠 AI-Powered Features

11. **Smart Titles**: Generate SEO-friendly titles from keywords or image analysis
12. **Rich Descriptions**: Create detailed, engaging descriptions with key selling points
13. **Dynamic Pricing**: ML-based price recommendations using regional market data
14. **Photo Enhancement**: Automatic brightness, contrast, and clarity improvements
15. **Auto-Tagging**: Intelligent categorization with relevant keyword tags
16. **Quality Assessment**: AI scoring for listing completeness and appeal

### 🗺️ Discovery & Search

17. **Live Map Interface**: Real-time listing updates with smooth clustering
18. **Proximity Filters**: Configurable distance ranges (1km to 50km+)
19. **Price Boundaries**: Min/max price sliders with instant filtering
20. **Category Filtering**: Multi-select category and tag filtering
21. **Listing Previews**: Rich cards with images, price, and distance

### 💬 Communication Features

22. **Real-Time Messaging**: WebSocket-based instant messaging
23. **Message Status**: Delivered, read, and typing indicators
24. **Chat Persistence**: Complete message history stored in database
25. **Push Notifications**: In-app and browser notifications for new messages

### 📱 User Experience

26. **Responsive Design**: Mobile-first design that works on all screen sizes
27. **Global Search**: Full-text search across titles, descriptions, and tags
28. **Smart Sorting**: Multiple sort options with user preference memory
29. **Personal Dashboard**: Activity overview with quick access to listings and chats

### 🔧 Technical Infrastructure

30. **GraphQL API**: Complete schema covering all platform functionality with efficient data fetching

## 🎨 User Journey Examples

### **Selling an Item**

1. User uploads a photo of their bicycle
2. AI suggests title: "Mountain Bike - Trek X-Caliber 7, Excellent Condition"
3. AI generates description highlighting key features and condition
4. AI suggests price: $650 based on local market data
5. User reviews, makes minor edits, and publishes
6. Listing appears on map instantly for nearby buyers

### **Finding an Item**

1. User opens map view and sees clustered listings in their area
2. Filters by "Electronics" category and "$0-200" price range
3. Clicks on a cluster to see individual listings
4. Views laptop listing with AI-generated description
5. Starts chat with seller to ask questions
6. Arranges pickup through the messaging system

## 🚀 Getting Started

### Prerequisites

- PHP 8.1+ with Laravel
- Node.js 18+ with npm/yarn
- MySQL 8.0+
- Redis (for sessions and caching)
- OpenAI API key
- Mapbox API key

### Quick Setup

```bash
# Clone the repository
git clone https://github.com/your-username/sellspot.git
cd sellspot

# Install backend dependencies
cd server
composer install
cp .env.example .env
php artisan key:generate

# Install frontend dependencies
cd ../client
npm install

# Setup database
cd ../server
php artisan migrate
php artisan db:seed

# Start development servers
php artisan serve      # Backend on :8000
cd ../client && npm run dev  # Frontend on :3000
```

## 🔮 Future Enhancements

- **AI-Generated Images**: Create product photos from descriptions
- **Voice Listings**: Create listings using voice commands
- **AR Try-Before-Buy**: Augmented reality for furniture and clothing
- **Blockchain Escrow**: Secure payments with smart contracts
- **Social Features**: Follow favorite sellers and get updates
- **Business Accounts**: Enhanced features for small businesses

## 📊 Success Metrics

- **User Engagement**: Average session time and daily active users
- **AI Adoption**: Percentage of listings using AI-generated content
- **Transaction Success**: Completion rate from inquiry to sale
- **Geographic Coverage**: Active listings density per area
- **User Satisfaction**: Ratings and retention rates

---

**Built with ❤️ for local communities everywhere**
