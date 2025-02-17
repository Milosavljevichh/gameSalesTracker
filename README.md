# **📌 Project Plan Template: Steam Sales Web App**  
*Version: 1.0*  
*Last Updated: 17/2/2025*  

## **1. Project Overview**  
### **1.1 Project Name:**  
**Sales Tracker**  

### **1.2 Objective:**  
A web app that allows users to search for Steam games on sale, filter by discount %, price range and reviews.  

### **1.3 Key Features:**  
- Fetch and display games currently on sale  
- Filter by price range and discount percentage  
- Show game images and details  

---

## **2. Technical Overview**  
### **2.1 Technology Stack:**  
| Component  | Technology |
|------------|------------|
| **Frontend**  | React.js (or Next.js for SEO) |
| **API**  | CheapShark API (primary), Steam API (for extra details) |
| **Database (if needed in future updates)**  | Firebase / MongoDB (if user preferences need saving) |
| **Hosting**  | Vercel (Frontend) + Render/Heroku (Backend) |

### **2.2 API Requirements:**  
- **CheapShark API** → Fetch game sales, discounts, and images  
- **Steam API (optional)** → Fetch additional game details  

---

## **3. Features Breakdown**  
### **3.1 Must-Have Features**  
✔ Fetch and display Steam sales  
✔ Filter by price range  
✔ Filter by discount %  
✔ Display game images  

### **3.2 Nice-to-Have Features**  
➕ Allow users to favorite games  
➕ Show historical price trends (if Steam API is used)  
➕ Notify users when a game goes on sale  
➕ UI themes

---

## **4. Risks & Mitigation**  
| Risk | Potential Issue | Mitigation Strategy |
|------------|--------------------|------------------|
| **CheapShark API downtime** | Sales data unavailable | Implement fallback API or cache data |
| **Steam API limitations** | Missing game details | Use another source or display limited info |
| **Performance issues** | Slow loading times | Optimize API calls, lazy load images |

---

## **5. Resources Needed**  
### **5.1 Tools & Services**  
| Tool | Purpose |
|------------|------------|
| **Postman** | API testing |
| **Vercel** | Frontend deployment |
| **Render/Heroku** | Backend hosting (if needed) |
| **GitHub** | Version control |

---

## **6. Success Metrics**  
- ✅ The app loads game deals within **2 seconds**  
- ✅ Filters work correctly (price, discount %)  
- ✅ At least **90% test coverage** for API calls  
- ✅ Successfully deployed and accessible  

---