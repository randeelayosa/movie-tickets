// Business Logic for Customer Info and Order ---------
function Order() {
  this.tickets = [],
}

Order.prototype.addTicket = function(ticket) {
  this.tickets.push(ticket);
}




// Business Logic for Tickets ---------
function Ticket(firstName, lastName, movie, time, age) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.movie = movie,
  this.time = time,
  this.age = age
}

Ticket.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}



// User Interface Logic ---------
var order = new Order();

function displayTicketDetails(TicketToDisplay) {
  var orderInformation = $("ul#purchase");
  var htmlForOrderInfo = "";
  TicketToDisplay.tickets.forEach(function(ticket) {
    htmlForOrderInfo += "<li>" + ticket.fullName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};



$(document).ready(function() {
  $("form#new-customer").submit(function(event) {
    event.preventDefault();

    function showTicket(addTicket) {
      var contact = addressBook.addTicket(addTicket);
      $("#show-ticket").show();
      $(".first-name").html(contact.firstName);
      $(".last-name").html(contact.lastName);
      $(".movie").html(contact.movie);
      $(".show-time").html(contact.time);
      $(".age").html(contact.age);
      var buttons = $("#buttons");
      buttons.empty();
      // buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");   **Make a refresh button with this. Copy code syntax from other project**
    }

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedEmail = {
         emailInput: $("input#new-email").val(),
         workEmailInput: $("#new-work-email").val(),
         personalEmailInput: $("#new-personal-email").val(),
         otherEmailInput: $("#new-other-email").val()
    }
    console.log(inputtedEmail);
    var inputtedAddress = $("input#new-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-email").val("");
    $("input#new-work-email").val("");
    $("input#new-personal-email").val("");
    $("input#new-other-email").val("");
    $("input#new-address").val("");
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedAddress);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  });
});s
