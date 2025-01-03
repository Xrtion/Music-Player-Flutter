import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:music_player/consts/colors.dart';
import 'package:music_player/consts/text_style.dart';
import 'package:music_player/controllers/players_controllers.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    var controller = Get.put(PlayersControllers());

    return Scaffold(
      backgroundColor: bgDarkColor,
      appBar: AppBar(
        backgroundColor: bgDarkColor,
        actions: [
          IconButton(onPressed: () {}, icon: Icon(Icons.search, color: whiteColor)),
        ],
        leading: Icon(Icons.sort_rounded, color: whiteColor),
        title: Text(
          'Music Player',
          style: ourStyle(), 
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: ListView.builder(
          physics: BouncingScrollPhysics(),
          itemCount: 100,
          itemBuilder: (BuildContext context, int index) {
            return Container(
              margin: const EdgeInsets.only(bottom: 4),
              child: ListTile(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                tileColor: bgColor,
                title: Text(
                  'Music name', 
                  style: ourStyle(),
                ),
                subtitle: Text(
                  'Artist name', 
                  style: ourStyle(),
                ),
                leading: const Icon(
                  Icons.music_note, 
                  color: whiteColor, 
                  size: 32,
                ),
                trailing: const Icon(
                  Icons.play_arrow, 
                  color: whiteColor, 
                  size: 26,
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}