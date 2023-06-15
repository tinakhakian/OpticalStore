/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Visine Redness Relief",
    description:
      "Relieves eye redness due to minor eye irritations. Promotes healthy tear production for long-lasting comfort. Contains a demulcent to form a protective film over the eye surface.",
    price: 8.99,
    discontinued: false,
    categories: ["redness"],
    imageUrl:
      "https://images.pexels.com/photos/6660871/pexels-photo-6660871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "P2",
    title: "Refresh Tears Lubricant",
    description:
      "Relieves dryness and irritation in the eyes. Suitable for all ages and contact lens wearers. Contains a buffer to maintain the pH balance.",
    price: 10.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1551184451-76b762941ad6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGV5ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P3",
    title: "Zaditor Anti-histamine",
    description:
      "Relieves itchy eyes due to allergies. contains natural ingredients like chamomile and aloe vera for gentle care. Contains an antimicrobial to fight infection.",
    price: 14.99,
    discontinued: false,
    categories: ["allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1563223552-30d01fda3ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
  },
  {
    id: "P4",
    title: "Rohto Cool Max",
    description:
      "Provides a cooling sensation and relieves redness and dryness. elps reduce the appearance of dark circles and under-eye puffiness.",
    price: 12.99,
    discontinued: false,
    categories: ["redness", "dryness"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661778460739-c31041876761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "P5",
    title: "Alcon Naphcon-A ",
    description:
      "Relieves redness and itchiness caused by allergies. Can be used as a preventative measure against dry eyes caused by environmental factors.",
    price: 7.99,
    discontinued: false,
    categories: ["redness", "allergy"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661499690287-b7ff53b5beaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRyb3AlMjBib3R0bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P6",
    title: "Blink Contacts Lubricant ",
    description:
      "Relieves dryness and discomfort caused by contact lenses. Helps protect against blue light exposure from electronic devices.",
    price: 13.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1601570445156-17eb20a7bd1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29udGFjdCUyMGxlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P7",
    title: "Similasan",
    description:
      "Relieves symptoms of eye allergies. Non-drying formula won't leave eyes feeling tight or uncomfortable. Contains an anti-inflammatory to reduce swelling.",
    price: 11.99,
    discontinued: false,
    categories: ["allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1647427017463-ac19f7a245b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRyb3BzJTIwbWVkaWNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P8",
    title: "Clear Eyes Maximum",
    description:
      "Relieves redness and provides up to 12 hours of soothing comfort. Helps alleviate symptoms of eye strain and fatigue. Contains a redness-reducing agent to make eyes appear brighter and clearer.",
    price: 7.99,
    discontinued: false,
    categories: ["redness"],
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1564149096159-4f8c72529ac8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGV5ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P9",
    title: "Systane Ultra Lubricant",
    description:
      "Provides long-lasting relief for dry eyes. Convenient dropper bottle allows for easy, precise application. Contains a moisturizing agent that forms a protective barrier over the eye surface.",
    price: 15.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661499672602-ea63fc5d3fb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV5ZSUyMGRyb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P10",
    title: "Visine Dry Eye Lubricant",
    description:
      "Relieves dryness and irritation in the eyes. Sterile and preservative-free for maximum safety. Contains vitamin E to promote healthy skin around the eyes.",
    price: 7.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1626993562896-4bcc5ba2c08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGV5ZSUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P11",
    title: "Pfizer Master Soothing",
    description:
      "Relieves dryness and irritation in the eyes. Provides relief from redness and inflammation. Contains a blend of antioxidants to protect eyes from environmental stressors.",
    price: 7.99,
    discontinued: true,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1572489373015-46c874dc4114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29udGFjdCUyMGxlbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P12",
    title: "Clear Eyes Relief",
    description:
      "Relieves itching and provides up to 12 hours of soothing comfort. Helps protect against blue light exposure from electronic devices.",
    price: 8.99,
    discontinued: false,
    categories: ["allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1633613286880-dae9f126b728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGV5ZSUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P13",
    title: "Rohto Digi-Eye Cooling",
    description:
      "Provides a cooling sensation and relieves dryness and fatigue caused by digital screens. Suitable for all ages and contact lens wearers",
    price: 12.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661541114746-c2e4efff0712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvbXB1dGVyJTIwdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P14",
    title: "Bausch + Lomb Opcon-A",
    description:
      "Relieves redness and itchiness caused by allergies. Contains anti-histamine. Can be used as a preventative measure against dry eyes caused by environmental factors.",
    price: 10.99,
    discontinued: false,
    categories: ["redness", "allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1610021684483-b06bf8ed5a41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJvcHMlMjBtZWRpY2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P15",
    title: "Alcon Systane Balance Lubricant",
    description:
      "Restores the natural tear film and relieves dryness and irritation. Designed to support overall eye health and function.",
    price: 14.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1614859385191-6021780bd35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljaW5lJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P16",
    title: "Refresh Optive Mega-3 Lubricant ",
    description:
      "Provides long-lasting relief for dry eyes with added omega-3. Helps reduce the appearance of dark circles and under-eye puffiness.",
    price: 17.99,
    discontinued: true,
    categories: ["dryness"],
    imageUrl:
      "https://images.unsplash.com/photo-1624362772755-4d5843e67047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b21lZ2ElMjAzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P17",
    title: "Blink-N-Clean Lens Drops",
    description:
      "Cleans and refreshes contact lenses while providing comfort. Convenient dropper bottle allows for easy, precise application.",
    price: 12.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.pexels.com/photos/8088910/pexels-photo-8088910.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "P18",
    title: "Zaditor Twin Pack",
    description:
      "Relieves itchy eyes due to allergies. Contains anti-histamine. Provides instant relief for allergy-related eye symptoms. Contains an anti-inflammatory to reduce swelling.",
    price: 24.99,
    discontinued: false,
    categories: ["allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1631980837325-da06c41f9be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1lZGljaW5lJTIwcGFja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "P19",
    title: "TheraTear Contact Ease",
    description:
      "Relieves dryness and irritation caused by contact lenses. Helps reduce the appearance of dark circles and under-eye puffiness.",
    price: 13.99,
    discontinued: false,
    categories: ["dryness"],
    imageUrl:
      "https://images.pexels.com/photos/8376268/pexels-photo-8376268.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "P20",
    title: "Visine Totality Multi-Symptom",
    description:
      "Relieves redness, dryness, itching, and burning in the eyes. Helps protect against blue light exposure from electronic devices.",
    price: 10.99,
    discontinued: false,
    categories: ["redness", "dryness", "allergy"],
    imageUrl:
      "https://images.unsplash.com/photo-1567309994938-ff50dc0a4959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvbnRhY3QlMjBsZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];
