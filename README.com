##Demonstration on Authentication Using Firebase with react-native

#This project incorporates the ability to log a user in and out with
an account that is connected to a Firebase server I set up.
In addition, there is a spinner added for a better UX experience
that is rendered while the app loads, or while signing in or out.

Thank you to Stephen Grider for his Udemy course 'The Complete React Native and Redux Course'
which provided the guidance for the flow of the framework.
