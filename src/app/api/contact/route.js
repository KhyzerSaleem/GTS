// src/app/api/contact/route.js
export async function POST(request) {
    try {
      // Get the form data from the request
      const formData = await request.json();
      
      // Check if required fields are present
      if (!formData.email) {
        return new Response(JSON.stringify({ 
          success: false, 
          errors: ["Email is required"] 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      if (!formData.subject) {
        return new Response(JSON.stringify({ 
          success: false, 
          errors: ["Subject is required"] 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      if (!formData.message) {
        return new Response(JSON.stringify({ 
          success: false, 
          errors: ["Message is required"] 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      // Forward the request to the external API (for future use)
      // For now, just return a success response
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Message received successfully" 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error("API route error:", error);
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Server error: " + error.message,
        errors: ["Server error"]
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }