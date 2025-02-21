# Project Title

FARM FOLKS MARKET

## Overview

Farm Folks Market is a user-friendly online platform designed to connect local vendors with customers by creating a virtual marketplace for farmers' markets. The platform allows vendors to easily register and showcase their businesses, while customers can explore vendors and filter by category. With features like vendor filtering, registering, and a user-friendly design, Farm Folks Market simplifies the process of discovering and supporting local businesses. By providing a centralized hub for farmers' market activities, the platform promotes community engagement and fosters the growth of local economies.

### Problem Space

Local farmers' markets play a vital role in supporting small businesses and building community connections. However, the current system for organizing and participating in these markets faces several challenges:

1. Lack of a Centralized Platform for Vendors
   Small businesses often struggle to find an easy way to register for markets and showcase their offerings. Most registrations are manual, requiring emails, phone calls, or in-person visits, which creates barriers for new or resource-limited vendors.

2. Limited Visibility for Vendors
   Farmers' markets rely heavily on social media or word-of-mouth for promotion, making it difficult for customers to know which businesses will be present. New or smaller vendors often get overshadowed by established ones, reducing their chances of attracting customers.

3. Customer Inconvenience in Finding Vendors
   Customers often don’t know which vendors will be at a market or what products will be available. Without a way to filter vendors by category (e.g., organic produce, handmade crafts), planning a visit becomes frustrating and inefficient.

4. No Digital Interaction Between Vendors and Customers
   Customers have no way to bookmark vendors they like or stay updated on promotions. Similarly, vendors lack a direct way to engage with customers, share updates, or build lasting relationships.

Farm Folks Market addresses these challenges by providing a centralized platform that simplifies vendor registration, improves visibility, and enhances the customer experience. By bridging the gap between vendors and customers, the platform strengthens local economies and fosters meaningful community connections.

### User Profile

Farm Folks Market is designed for two primary user groups: vendors and customers. Each group interacts with the platform in distinct ways, and the app is tailored to meet their unique needs.

1.  Vendors

    Who They Are: Small business owners, farmers, artisans, bakers, and other local producers who sell their goods at farmers' markets.

    How They Will Use It:

        Registration: Vendors can register for the market through a simple online form without needing to create an account.

        Showcase Their Business: Vendors can create a profile to highlight their products, upload photos, and share updates or promotions.

        Engage with Customers: Vendors can use their profile to communicate with customers and build a loyal clientele.

    Special Considerations:

        The platform must be intuitive and easy to use, as many vendors may not have advanced technical skills.

        Vendors need a straightforward way to update their profiles and listings without requiring extensive training.

2.  Customers

    Who They Are: Local residents, food enthusiasts, and community members who visit farmers' markets to shop for fresh produce, handmade goods, and other locally sourced products.

    How They Will Use It:

        Discover Vendors: Customers can browse a directory of vendors and filter by category.

        Plan Their Visit: Customers can bookmark vendors they’re interested in and view detailed profiles to plan their market visit.

        Stay Informed: Customers can view vendor updates and promotions directly on the platform.

    Special Considerations:

        The app must be easy to navigate and accessible to users of all ages and technical abilities.

        Features like filtering should be simple and intuitive to enhance the customer experience.

### Features

Farm Folks Market includes the following key features to address the needs of vendors and customers. The platform is designed to be simple and accessible with no authentication or user profiles required at this stage.

1. Vendor Registration
   Vendors can register for the market through a simple online form.

   No authentication or signup is required.

   Vendors provide basic information such as business name, category, description, and contact details, along with photos of their products.

2. Vendor Directory
   Customers can browse a comprehensive directory of vendors participating in the market.

   Each vendor has a dedicated profile showcasing their products, photos, and updates.

   Vendors can easily update their profiles with new information or promotions.

3. Filtering

   Vendors can be filtered by category (e.g., organic produce, baked goods, handmade crafts).

   \*Results can be sorted by popularity, distance, or alphabetical order.

4. Vendor Updates and Promotions -
   Vendors can post updates, promotions, and new product information directly on their profile.

   Customers can view these updates when browsing the vendor directory or visiting a vendor’s profile.

## Implementation

### Tech Stack

Farm Folks Market will leverage a modern and efficient tech stack to ensure a seamless development process and a high-quality user experience. Below is a breakdown of the technologies that will be used, along with their purpose and any potential limitations.

1. Frontend
   React.js: A popular JavaScript library for building dynamic user interfaces. React’s component-based architecture will allow for reusable and maintainable code.

   React Router DOM: A library for handling client-side routing in React applications. It will enable smooth navigation between different pages, such as the vendor directory, vendor profiles, and wishlist.

   SASS: A CSS preprocessor that enhances styling capabilities with features like variables, nesting, and mixins. SASS will help create a clean and modular design system.

   Vite: A fast and lightweight build tool for modern web development. Vite’s quick development server and optimized build process will improve development efficiency.

   Axios: A promise-based HTTP client for making API requests. Axios will be used to fetch data from the backend and handle responses efficiently.

2. Backend
   Node.js: A JavaScript runtime that allows for building scalable and efficient server-side applications. Node.js will handle API requests, business logic, and database interactions.

   Express.js: A minimal and flexible Node.js web application framework. Express will simplify the creation of RESTful APIs and middleware for handling requests and responses.

   Knex.js: A SQL query builder for Node.js that supports multiple databases, including MySQL. Knex.js will streamline database interactions and ensure secure and efficient queries.

   MySQL: A relational database management system for storing structured data, such as vendor information. MySQL is reliable and widely supported.

   CORS (Cross-Origin Resource Sharing): A middleware to enable secure cross-origin requests between the frontend and backend. This ensures that the React frontend can communicate with the Node.js backend without issues.

   Multer: A middleware for handling multipart/form-data, primarily used for file uploads. Multer will be essential for vendors uploading images of their products or business logos.

3. Development Tools
   Visual Studio Code (VS Code): A lightweight yet powerful code editor with built-in support for JavaScript, React, Node.js, and many other technologies. Extensions like Prettier, and Live Server will enhance productivity.

   npm (Node Package Manager): A package manager for installing and managing dependencies for both frontend and backend development.

   Figma: For prototyping the UI.

Potential Limitations-

1. React.js: While React is highly efficient, it may have a steep learning curve for developers new to component-based architecture or state management.

2. MySQL: As a relational database, MySQL may not be ideal for handling unstructured or highly complex data. However, it is well-suited for the structured data requirements of Farm Folks Market.

3. CORS: Misconfiguration of CORS policies can lead to security vulnerabilities or issues with frontend-backend communication. Proper setup and testing are essential.

4. Multer File Uploads: While Multer efficiently handles file uploads, improper configuration (such as missing file size limits or lack of validation) can lead to security risks or performance issues. Ensuring proper validation and file storage strategies will be crucial.

### APIs

List any external sources of data that will be used in your app.

### Sitemap

        Home
        ├── Vendors
        │ ├── Vendor Listings
        │ └── Vendor Details
        ├── Vendor Registration
        ├── Wishlist\*
        ├── About Us
        └── Contact Us

Page Descriptions-

1. Home- The main landing page of the platform, featuring an overview of the marketplace, featured vendors, and quick access to key sections (e.g., Vendors, Vendor Registration).

2. Vendors

   1.1 Vendor Listings: Displays a filterable list of all vendors. Customers can filter by category (e.g., organic produce, baked goods, handmade crafts)

   1.2 Vendor Details: A dedicated page for each vendor, showcasing their business information, products, photos, updates, and promotions.

3. Vendor Registration- A simple online form where new vendors can register and provide basic information (e.g., business name, category, description, contact details, and photos). No authentication or account creation is required.

4. \*Wishlist: A personalized page where customers can save and manage their favorite vendors using local storage. Vendors can be added or removed from the wishlist. This is a nice to have feature for later and may/may not be included in the initial working prototype.

5. About Us- Provides information about Farm Folks Market, its mission to support local economies, and how it connects vendors and customers.

6. Contact Us- A page for users to get in touch with the platform for support, feedback, or inquiries.

### Mockups

https://www.figma.com/design/HvzLqOzPJ4OQ6EgDfAXxke/FARM-FOLKS?node-id=0-1&p=f&t=cDWcB28ot7Bfp7Om-0

### Data

Database Schema (for Reference)

1. Vendors Table

   Column Type Description:
   id INT (PK) Unique ID for the vendor.
   name VARCHAR Name of the vendor's business.
   category VARCHAR Category of the vendor.
   description TEXT Description of the vendor's business.
   contactEmail VARCHAR Contact details (email).
   contactPhone VARCHAR Contact details (phone).
   website VARCHAR website/social-media details.
   imageUrl VARCHAR URL of the vendor's logo or images.
   updates TEXT Updates or promotions (optional).
   location VARCHAR(255) Market location or area (optional)
   availability VARCHAR(255) Days of the week or schedule vendor is available

### Endpoints

1. Vendor Endpoints

~GET /api/vendors

Description: Fetch a list of all vendors.

Parameters:

category (optional): Filter vendors by category (e.g., "organic produce", "handmade crafts").

search (optional): Search vendors by name or keyword.

sort (optional): Sort vendors by popularity, distance, or alphabetical order.

Response: Array of vendor objects with basic details (e.g., id, name, category, description, imageUrl).

~ GET /api/vendors/:id

Description: Fetch detailed information about a specific vendor.

Parameters:

id (required): The unique ID of the vendor.

Response: Vendor object with full details (e.g., id, name, category, description, contactInfo, products, updates, imageUrl).

~ POST /api/vendors

Description: Register a new vendor.

Parameters:

name (required): Name of the vendor's business.

category (required): Category of the vendor (e.g., "produce", "baked goods").

description (required): A brief description of the vendor's business.

contactInfo (required): Contact details (e.g., email, phone).

imageUrl (optional): URL of the vendor's logo or product images.

Response: Success message and the newly created vendor object.

~ PUT /api/vendors/:id

Description: Update a vendor's profile (e.g., add new products, promotions, or updates).

Parameters:

id (required): The unique ID of the vendor.

updates (optional): New updates or promotions to add to the vendor's profile.

products (optional): Updated list of products.

Response: Updated vendor object.

~ DELETE /api/vendors/:id

Description: Delete a specific vendor from the system.

Parameters:

id (required): The unique ID of the vendor to be deleted.
Response:

status (string): Indicates the result of the operation (e.g., "success", "error").
message (string): A message explaining the result of the deletion (e.g., "Vendor successfully deleted", "Vendor not found").

2. Utility Endpoints
   GET /api/vendors/categories

Description: Fetch a list of all available vendor categories (e.g., "produce", "baked goods", "handmade crafts").

Parameters: None.

Response: Array of category strings.

~ Example API Workflow ~

-> Vendor Registration:

A vendor submits their details via the POST /api/vendors endpoint.

The server validates the data and stores it in the database.

-> Customer Browsing Vendors:

A customer fetches the list of vendors using GET /api/vendors with optional filters (e.g., category=produce).

The customer clicks on a vendor to view their full profile using GET /api/vendors/:id.

## Roadmap

Day 1: Project Setup and Planning
Set up the project repository (GitHub/GitLab).
Initialize the frontend (React.js + Vite) and backend (Node.js + Express.js) projects.
Install necessary dependencies (React Router DOM, Axios, Knex.js, MySQL, etc.).
Define the folder structure for both frontend and backend.
Finalize the database schema and create the MySQL database.

Day 2: Backend Development - Vendor API
Implement the POST /api/vendors endpoint for vendor registration.
Implement the GET /api/vendors endpoint to fetch all vendors.
Implement the GET /api/vendors/:id endpoint to fetch a single vendor's details.
Set up Knex.js for database queries.
Test API endpoints using Postman.

Day 3: Backend Development - Utility API and File Uploads
Implement the GET /api/categories endpoint to fetch vendor categories.
Set up Multer for handling file uploads (e.g., vendor images).
Add file upload functionality to the POST /api/vendors endpoint.
Test file uploads and ensure proper storage.

Day 4: Frontend Development - Homepage and Vendor Listings
Create the homepage layout with featured vendors and quick links.
Develop the Vendor Listings page to display all vendors.
Integrate the GET /api/vendors endpoint to fetch and display vendor data.
Add dynamic filtering by category using the GET /api/categories endpoint.
Style the pages using SASS and the defined color palette.

Day 5: Frontend Development - Vendor Details and Registration
Create the Vendor Details page to display full vendor information.
Integrate the GET /api/vendors/:id endpoint to fetch and display vendor details.
Develop the Vendor Registration form.
Integrate the POST /api/vendors endpoint for vendor registration.
Add form validation and error handling.

Day 6: Frontend Development - About Us and Contact Us
Create the About Us page with information about the platform.
Develop the Contact Us page with a simple contact details.
Style both pages to match the overall design.

Day 7: Testing and Bug Fixes
Conduct end-to-end testing of all features.
Fix any bugs or issues identified during testing.

Day 8: Final Touches
Add final styling and polish to the UI.
Prepare for demo.
Work on nice to have's if time permits.

---

## Future Implementations

By implementing above mentioned features, Farm Folks Market creates a streamlined and engaging platform that benefits both vendors and customers. The absence of authentication and user profiles ensures a frictionless experience, while features like registering and filtering provide personalized functionality. This approach makes the app accessible to all users while laying the groundwork for future enhancements, such as -

1. Authentication and support for multiple events.
2. Real-Time Countdown to Events
3. Wishlist/Bookmarking favourite vendors customer is intrested in.

---

## Fonts and Color Palette

FONT FAMILY:
IBM Plex Serif, Newsreader, sans-serif, Arial

Color Palette -
TEXT COLORS:
#38612A (Deep Green),
#F0EFD5 (Soft Cream),
#DF7D71 (Muted Coral/Red),
BG COLORS:
#D6E9CE (Soft Pastel Green),
#F0EFD5 (Soft Cream),
#FFFBF7 (Warm Off-White),
CTA/others
#DFC04E (Golden Yellow),
#C5A843 (Muted Golden Yellow)
