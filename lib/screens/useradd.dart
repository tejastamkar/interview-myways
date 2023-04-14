import 'package:flutter/material.dart';
import 'package:userlistapp/data/user.dart';

class UserAddScreen extends StatefulWidget {
  final Function refresh;
  const UserAddScreen({super.key, required this.refresh});

  @override
  State<UserAddScreen> createState() => _UserAddScreenState();
}

class _UserAddScreenState extends State<UserAddScreen> {
  final TextEditingController _username = TextEditingController();
  final TextEditingController _useremail = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Add new user"),
      ),
      body: Column(
        children: [
          const Text("UserName"),
          TextField(
            controller: _username,
          ),
          const SizedBox(
            height: 20,
          ),
          const Text("Email"),
          TextField(
            controller: _useremail,
          ),
          ElevatedButton(
              onPressed: () async {
                setState(() {
                  Map userdetails = {
                    "name": _username.text,
                    "email": _useremail.text
                  };
                  users.add(userdetails);
                });
                await widget.refresh();
                Navigator.pop(context);
              },
              child: const Text("add"))
        ],
      ),
    );
  }
}
