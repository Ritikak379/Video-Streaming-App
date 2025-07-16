package com.stream.app.services;

import com.stream.app.entities.Video;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VideoService {

    //to save video
    Video save(Video video, MultipartFile file);


    //to get video by id
    Video get(String videoId);


    //to get video by title
  Video getByTitle(String title);
  List<Video> getAll();


    //video processing
    String processVideo(String videoId);
}
