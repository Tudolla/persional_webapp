package controller;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Tu Nguyen
 */
@WebServlet(urlPatterns = {"/registerServlet"})
public class RegisterServlet extends HttpServlet {
   private static final long serialVersionUID = 1L;
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        PrintWriter out = response.getWriter();
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        String address = request.getParameter("address");
        String phone = request.getParameter("phone");
        
        
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "root", "admin");
           
            PreparedStatement ps = con.prepareStatement("INSERT INTO user (username, password, address, phone) VALUES (?, ?, ?, ?)");
            
           
            ps.setString(1, username);
            ps.setString(2, password);
            ps.setString(3, address);
            ps.setString(4, phone);
            
            int res = ps.executeUpdate();
            if(res >0){
                response.setContentType("text/html");
                out.print("<h2 style='color:green'> User register succesfully </h2>");
                RequestDispatcher rd = request.getRequestDispatcher("/index.html");
                rd.include(request, response);
                
                
            }else{
                response.setContentType("text/html");
                out.print("<h2 style='color:red'> User register failed! </h2>");
                RequestDispatcher rd = request.getRequestDispatcher("/register.html");
                rd.include(request, response);
                
                
            }
            
        }catch(Exception e){
            e.printStackTrace();
            response.setContentType("text/html");
            out.print("<h2 style='color:red'> Error: " + e.getMessage()+ "</h2>");
            RequestDispatcher rd = request.getRequestDispatcher("/register.html");
            rd.include(request, response);
        }
    }

    

}
