import 'package:flutter/material.dart';
import 'package:userlistapp/data/user.dart';
import 'package:userlistapp/screens/useradd.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: () async => setState(() {}),
      child: Scaffold(
        appBar: AppBar(
          title: const Text("User Lists"),
        ),
        body: ListView.builder(
          shrinkWrap: true,
          itemBuilder: (_, index) => Card(
            child: Padding(
              padding: const EdgeInsets.all(10),
              child: Column(
                children: [
                  Text(
                    users[index]["name"],
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Text(
                    users[index]["email"],
                  ),
                ],
              ),
            ),
          ),
          itemCount: users.length,
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (_) => UserAddScreen(
                          refresh: () => setState(() {}),
                        )));
          },
          child: const Icon(Icons.add),
        ),
      ),
    );
  }
}
