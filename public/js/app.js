"use strict";$(function(){function e(){y.addClass("hidden"),k.removeClass("hidden"),M.prop("disabled",!1),B.prop("disabled",!1),j.prop("disabled",!1),o(),f.loop=!1,f.src="src/assets/ShowMeWhatYouGot.mp3",f.play(),N=K>N?K:N,m.text(N),K=0,p.text(K)}function s(){y.removeClass("hidden"),x.addClass("hidden"),I.addClass("hidden"),M.prop("disabled",!1),B.prop("disabled",!1),j.prop("disabled",!1),g.get(0).pause(),C.get(0).pause(),shuffle(questionBank),N=K>N?K:N,m.text(N),localStorage.setItem("highScore",N)}function o(){O=questionBank[F],15===F?(y.addClass("hidden"),I.addClass("hidden"),k.addClass("hidden"),x.removeClass("hidden"),F=0,p.text(K),f.loop=!1,f.src="src/assets/WubbaLubba.mp3",f.play(),g.get(0).play(),g.loop=!1,g.src="src/assets/winner.webm",N=K>N?K:N,m.text(N),localStorage.setItem("highScore",N)):(u.html(O.question),E.html(O.answers[0]),G.html(O.answers[1]),J.html(O.answers[2]),L.html(O.answers[3]),F++)}function t(e){var s=questionBank[H];Q.html(s.correctIndex[H]),O.correctIndex===$(e.target).index()?(console.log("working!"),K+=200,p.text(K),console.log(K,F),o()):(console.log("you died"),y.addClass("hidden"),I.removeClass("hidden"),k.addClass("hidden"),F=0,K=0,C.loop=!1,C.src="src/assets/loser.webm",C.get(0).play())}function d(){w.removeClass("hidden"),k.addClass("hidden"),v.get(0).play(),v.loop=!1,v.src="src/assets/meeseek.webm"}function n(){var e=O.answers[O.correctIndex];w.addClass("hidden"),k.removeClass("hidden"),alert(e),M.prop("disabled",!0),K-=100,p.text(K)}function a(){S.removeClass("hidden"),k.addClass("hidden"),b.get(0).play(),b.loop=!1,b.src="src/assets/twodots.mp4",u.html(O.question),W.html(O.answers[O.fiftyfifty[0]]),A.html(O.answers[O.fiftyfifty[1]])}function r(e){O.fiftyIndex===$(e.target).index("button.jerry")?(console.log("you live"),k.removeClass("hidden"),S.addClass("hidden"),o(),B.prop("disabled",!0),K+=100,p.text(K),b.get(0).pause()):(console.log("you died"),I.removeClass("hidden"),S.addClass("hidden"),b.addClass("hidden"),f.loop=!1,f.src="src/assets/jerry.mp3",f.play(),b.get(0).pause(),F=0,K=0)}function l(){function e(){var e=[Math.random(),Math.random(),Math.random(),Math.random()],s=e.reduce(function(e,s){return e+s});return e.map(function(e){return Math.round(e/s*100)})}q.removeClass("hidden"),k.addClass("hidden"),K-=100,p.text(K),f.loop=!1,f.src="src/assets/holograms.mp3",f.play();for(var s=e(),o=s.reduce(function(e,s){return e+s});100!==o;)s=e(),o=s.reduce(function(e,s){return e+s});console.log("After loop",s,o);var t=$(".bar"),d=$(".results li");s.forEach(function(e,s){t.eq(s).css("height",e+"%"),d.eq(s).text(e+"%")})}function i(){q.addClass("hidden"),k.removeClass("hidden"),j.prop("disabled",!0)}console.log("JS loaded!");var c=$(".start-button"),h=$(".reset-button"),u=$(".currentQ"),p=$(".score"),m=$(".high-score"),f=document.querySelector("audio"),g=$("#video1"),C=$("#video2"),v=$("#video3"),b=$("#video4"),y=$("#start"),x=$("#well-done"),k=$("#game-board"),w=$("#meeseeks-box"),S=$("#fifty-fifty"),q=$("#council"),I=$("#game-over"),M=$(".choice1"),B=$(".choice2"),j=$(".choice3"),W=$("#choice1"),A=$("#choice2"),E=$(".option1"),G=$(".option2"),J=$(".option3"),L=$(".option4"),Q=$(".answer"),Y=$(".meeseseeksButton"),z=$(".jerry"),D=$(".collectionofdouches"),F=0,H=0,K=0;p.text(K);var N=localStorage.getItem("highScore")||0;m.text(N);var O=null;c.on("click",e),Q.on("click",t),M.on("click",d),Y.on("click",n),B.on("click",a),z.on("click",r),j.on("click",l),D.on("click",i),h.on("click",s)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwic3RhcnRHYW1lIiwiJGluc3RydWN0aW9ucyIsImFkZENsYXNzIiwiJGdhbWVCb2FyZCIsInJlbW92ZUNsYXNzIiwiJGNob2ljZTEiLCJwcm9wIiwiJGNob2ljZTIiLCIkY2hvaWNlMyIsInNob3dRdWVzdGlvbiIsImF1ZGlvIiwibG9vcCIsInNyYyIsInBsYXkiLCIkaGlnaFNjb3JlIiwidGV4dCIsImhpZ2hTY29yZSIsInNjb3JlIiwiJHNjb3JlIiwiJHdlbGxEb25lIiwiJGdhbWVPdmVyIiwiJHZpZGVvMSIsImdldCIsIiR2aWRlbzIiLCJwYXVzZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJxdWVzdGlvbk9iamVjdCIsInF1ZXN0aW9uQmFuayIsInF1ZXN0aW9uSW5kZXgiLCIkcXVlc3Rpb25Cb3giLCJodG1sIiwicXVlc3Rpb24iLCIkYnV0dG9uMiIsImFuc3dlcnMiLCIkYnV0dG9uMyIsIiRidXR0b240IiwiY2hlY2tCdXR0b25zIiwiZSIsIiRidXR0b25zIiwiSXNJdGNvcnJlY3QiLCJjb3JyZWN0SW5kZXgiLCJyaWdodEluZGV4IiwidGFyZ2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiJHZpZGVvMyIsIm1yTWVlc2Vla3MiLCJhbGVydCIsImNvcnJlY3RBbnN3ZXIiLCJoZWxwZXJUd28iLCIkamVycmlmaWVkIiwiJHZpZGVvNCIsIiRqZXJyeTEiLCIkamVycnkyIiwiY2hlY2tGaWZ0eUZpZnR5IiwiZmlmdHlmaWZ0eSIsImZpZnR5SW5kZXgiLCJoZWxwZXJUaHJlZSIsImdlbmVyYXRlUGVyY2VudGFnZXMiLCJwZXJjZW50YWdlcyIsIk1hdGgiLCJyYW5kb20iLCJ0b3RhbCIsInJlZHVjZSIsImEiLCJiIiwiYXNrVGhlQXVkaWVuY2UiLCJ0b3RhbFBlcmNlbnRhZ2VzIiwiJGFza0F1ZGllbmNlIiwiJHJlc3VsdHMiLCIkYmFycyIsInBlcmNlbnRhZ2UiLCJlcSIsIiRzdGFydEJ1dHRvbiIsIiRyZXNldEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCIkcGhvbmVGcmllbmQiLCIkYnV0dG9uMSIsIiRtZWVzZXNlZWtzQnV0dG9uIiwiJGR1bWJEb3duIiwiJGF1ZGllbmNlUmV0dXJuIiwiZ2V0SXRlbSIsIm9uIiwiaGVscGVyT25lIiwicmV0dXJuVG9HYW1lIiwicmVzdGFydEdhbWUiXSwibWFwcGluZ3MiOiJZQUNBQSxHQUFFLFdBaURBLFFBQVNDLEtBQ1BDLEVBQWNDLFNBQVMsVUFDdkJDLEVBQVdDLFlBQVksVUFDdkJDLEVBQVNDLEtBQUssWUFBWSxHQUMxQkMsRUFBU0QsS0FBSyxZQUFZLEdBQzFCRSxFQUFTRixLQUFLLFlBQVksR0FDMUJHLElBQ0FDLEVBQU1DLE1BQU8sRUFDYkQsRUFBTUUsSUFBTSxrQ0FDWkYsRUFBTUcsT0FJTkMsRUFBV0MsRUFBS0MsRUFBaEJDLEVBQUFELEVBQ0FDLEVBQUFGLEtBQUFDLEdBQ0FFLEVBQU9ILEVBQ1JHLEVBQUFILEtBQUFFLEdBR0NoQixRQUFBQSxLQUNBa0IsRUFBVWpCLFlBQVMsVUFDbkJrQixFQUFVbEIsU0FBUyxVQUNuQkcsRUFBU0MsU0FBSyxVQUNkQyxFQUFTRCxLQUFLLFlBQVksR0FDMUJFLEVBQVNGLEtBQUssWUFBWSxHQUMxQmUsRUFBUUMsS0FBUixZQUFBLEdBQ0FDLEVBQVFELElBQUksR0FBR0UsUUFBZkQsRUFBUUQsSUFBSSxHQUFHRSxRQUdmUixRQUFBQSxjQUNBRixFQUFXQyxFQUFLQyxFQUFoQkMsRUFBQUQsRUFDQVMsRUFBQUEsS0FBYUMsR0FDZEQsYUFBQUMsUUFBQSxZQUFBVixHQUdDVyxRQUFBQSxLQUFBQSxFQUFpQkMsYUFBYUMsR0FJZDNCLEtBQWRELEdBQ0FtQixFQUFVbEIsU0FBUyxVQUNuQkMsRUFBQUEsU0FBQSxVQUNBZ0IsRUFBVWYsU0FBQUEsVUFDVnlCLEVBQUFBLFlBQUEsVUFDQVgsRUFBWUQsRUFDWlAsRUFBTUMsS0FBTk0sR0FDQVAsRUFBTUUsTUFBTSxFQUNaRixFQUFNRyxJQUFOLDRCQUNBUSxFQUFBQSxPQUNB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RUFBQSxZQUlaZ0YsRUFBYWhGLEVBQUEsWUFDYmtDLEVBQWFsQyxFQUFBLFlBQ2JvQyxFQUFhcEMsRUFBQSxZQUNicUMsRUFBYXJDLEVBQUEsWUFDYndDLEVBQWF4QyxFQUFBLFdBQ2JpRixFQUFzQmpGLEVBQUEscUJBQ3RCa0YsRUFBY2xGLEVBQUEsVUFDZG1GLEVBQW9CbkYsRUFBQSx3QkFDdEI4QixFQUFnQixFQUNkYSxFQUFOLEVBQ0l6QixFQUFRLENBQ1pDLEdBQU9ILEtBQUtFLEVBRVosSUFBSUQsR0FBWVMsYUFBYTBELFFBQVEsY0FBZ0IsQ0FDckRyRSxHQUFXQyxLQUFLQyxFQUVoQixJQUFJVyxHQUFpQixJQXNOckJZLEdBQVk2QyxHQUFBLFFBQVMvQyxHQUdyQmhDLEVBQVMrRSxHQUFHLFFBQVNDLEdBQXJCaEYsRUFBUytFLEdBQUcsUUFBU0MsR0FNckI5RSxFQUFZNkUsR0FBU2pDLFFBQXJCSCxHQUtBekMsRUFBQTZFLEdBQUEsUUFBQWpDLEdBRUE4QixFQUFBRyxHQUFBLFFBQUE1QixHQUtBb0IsRUFBQUEsR0FBQUEsUUFBZ0JqQixHQUpoQnVCLEVBQWdCRSxHQUFHLFFBQVNFLEdBSTVCVixFQUFhUSxHQUFHLFFBQVNHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1ha2luZyBjaGFuZ2VzIGZvciBpbml0aWFsIGNvbW1pdFxuJCgoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdKUyBsb2FkZWQhJyk7XG5cblxuICBjb25zdCAkc3RhcnRCdXR0b24gPSAkKCcuc3RhcnQtYnV0dG9uJyk7XG4gIGNvbnN0ICRyZXNldEJ1dHRvbiA9ICQoJy5yZXNldC1idXR0b24nKTtcbiAgY29uc3QgJHF1ZXN0aW9uQm94ID0gJCgnLmN1cnJlbnRRJyk7XG4gIGNvbnN0ICRzY29yZSA9ICQoJy5zY29yZScpO1xuICBjb25zdCAkaGlnaFNjb3JlID0gJCgnLmhpZ2gtc2NvcmUnKTtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhdWRpbycpO1xuXG4gIGNvbnN0ICR2aWRlbzEgPSAkKCcjdmlkZW8xJyk7XG4gIGNvbnN0ICR2aWRlbzIgPSAkKCcjdmlkZW8yJyk7XG4gIGNvbnN0ICR2aWRlbzMgPSAkKCcjdmlkZW8zJyk7XG4gIGNvbnN0ICR2aWRlbzQgPSAkKCcjdmlkZW80Jyk7XG5cbiAgY29uc3QgJGluc3RydWN0aW9ucyA9ICQoJyNzdGFydCcpO1xuICBjb25zdCAkd2VsbERvbmUgPSAkKCcjd2VsbC1kb25lJyk7XG4gIGNvbnN0ICRnYW1lQm9hcmQgPSAkKCcjZ2FtZS1ib2FyZCcpO1xuICBjb25zdCAkcGhvbmVGcmllbmQgPSAkKCcjbWVlc2Vla3MtYm94Jyk7XG4gIGNvbnN0ICRqZXJyaWZpZWQgPSAkKCcjZmlmdHktZmlmdHknKTtcbiAgY29uc3QgJGFza0F1ZGllbmNlID0gJCgnI2NvdW5jaWwnKTtcbiAgY29uc3QgJGdhbWVPdmVyID0gJCgnI2dhbWUtb3ZlcicpO1xuXG4gIGNvbnN0ICRjaG9pY2UxID0gJCgnLmNob2ljZTEnKTtcbiAgY29uc3QgJGNob2ljZTIgPSAkKCcuY2hvaWNlMicpO1xuICBjb25zdCAkY2hvaWNlMyA9ICQoJy5jaG9pY2UzJyk7XG4gIGNvbnN0ICRqZXJyeTEgPSAkKCcjY2hvaWNlMScpO1xuICBjb25zdCAkamVycnkyID0gJCgnI2Nob2ljZTInKTtcblxuXG4gIGNvbnN0ICRidXR0b24xID0gJCgnLm9wdGlvbjEnKTtcbiAgY29uc3QgJGJ1dHRvbjIgPSAkKCcub3B0aW9uMicpO1xuICBjb25zdCAkYnV0dG9uMyA9ICQoJy5vcHRpb24zJyk7XG4gIGNvbnN0ICRidXR0b240ID0gJCgnLm9wdGlvbjQnKTtcbiAgY29uc3QgJGJ1dHRvbnMgPSAkKCcuYW5zd2VyJyk7XG4gIGNvbnN0ICRtZWVzZXNlZWtzQnV0dG9uID0gJCgnLm1lZXNlc2Vla3NCdXR0b24nKTtcbiAgY29uc3QgJGR1bWJEb3duID0gJCgnLmplcnJ5Jyk7XG4gIGNvbnN0ICRhdWRpZW5jZVJldHVybiA9ICQoJy5jb2xsZWN0aW9ub2Zkb3VjaGVzJyk7XG4gIGxldCBxdWVzdGlvbkluZGV4ID0gMDtcbiAgY29uc3QgcmlnaHRJbmRleCA9IDA7XG4gIGxldCBzY29yZSA9IDA7XG4gICRzY29yZS50ZXh0KHNjb3JlKTtcblxuICBsZXQgaGlnaFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpIHx8IDA7XG4gICRoaWdoU2NvcmUudGV4dChoaWdoU2NvcmUpO1xuXG4gIGxldCBxdWVzdGlvbk9iamVjdCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICRpbnN0cnVjdGlvbnMuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRjaG9pY2UxLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UyLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIHNob3dRdWVzdGlvbigpO1xuICAgIGF1ZGlvLmxvb3AgPSBmYWxzZTtcbiAgICBhdWRpby5zcmMgPSAnc3JjL2Fzc2V0cy9TaG93TWVXaGF0WW91R290Lm1wMyc7XG4gICAgYXVkaW8ucGxheSgpO1xuXG5cbiAgICBoaWdoU2NvcmUgPSBzY29yZSA+IGhpZ2hTY29yZSA/IHNjb3JlIDogaGlnaFNjb3JlO1xuICAgICRoaWdoU2NvcmUudGV4dChoaWdoU2NvcmUpO1xuICAgIHNjb3JlID0gMDtcbiAgICAkc2NvcmUudGV4dChzY29yZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0YXJ0R2FtZSgpe1xuICAgICRpbnN0cnVjdGlvbnMucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICR3ZWxsRG9uZS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVPdmVyLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkY2hvaWNlMS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkY2hvaWNlMi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkY2hvaWNlMy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAkdmlkZW8xLmdldCgwKS5wYXVzZSgpO1xuICAgICR2aWRlbzIuZ2V0KDApLnBhdXNlKCk7XG5cbiAgICBzaHVmZmxlKHF1ZXN0aW9uQmFuayk7XG4gICAgaGlnaFNjb3JlID0gc2NvcmUgPiBoaWdoU2NvcmUgPyBzY29yZSA6IGhpZ2hTY29yZTtcbiAgICAkaGlnaFNjb3JlLnRleHQoaGlnaFNjb3JlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgaGlnaFNjb3JlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dRdWVzdGlvbigpIHtcbiAgICBxdWVzdGlvbk9iamVjdCA9IHF1ZXN0aW9uQmFua1txdWVzdGlvbkluZGV4XTtcblxuICAgIC8vIGlmIHRoZSBudW1iZXIgb2YgcXVlc3Rpb25zIGluZGV4ID0gMTUgLSBzZW5kcyB1c2VyIHRvIHdlbGwgZG9uZSBzY3JlZW5cbiAgICBpZiAocXVlc3Rpb25JbmRleCA9PT0gMTUpe1xuICAgICAgJGluc3RydWN0aW9ucy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZ2FtZU92ZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGdhbWVCb2FyZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkd2VsbERvbmUucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgcXVlc3Rpb25JbmRleCA9IDA7XG4gICAgICAkc2NvcmUudGV4dChzY29yZSk7XG4gICAgICBhdWRpby5sb29wID0gZmFsc2U7XG4gICAgICBhdWRpby5zcmMgPSAnc3JjL2Fzc2V0cy9XdWJiYUx1YmJhLm1wMyc7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAkdmlkZW8xLmdldCgwKS5wbGF5KCk7XG4gICAgICAkdmlkZW8xLmxvb3AgPSBmYWxzZTtcbiAgICAgICR2aWRlbzEuc3JjID0gJ3NyYy9hc3NldHMvd2lubmVyLndlYm0nO1xuICAgICAgaGlnaFNjb3JlID0gc2NvcmUgPiBoaWdoU2NvcmUgPyBzY29yZSA6IGhpZ2hTY29yZTtcbiAgICAgICRoaWdoU2NvcmUudGV4dChoaWdoU2NvcmUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZScsIGhpZ2hTY29yZSk7XG4gICAgICAvLyBlbHNlIGl0IGNhcnJ5cyBvbiB0aGUgZ2FtZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAgYWRkcyBxdWVzdGlvbiBwcm9wZXJ0eSB0byB0aGUgcXVlc3Rpb24gYm94XG4gICAgICAkcXVlc3Rpb25Cb3guaHRtbChxdWVzdGlvbk9iamVjdC5xdWVzdGlvbik7XG4gICAgICAvLyBhbmQgYWRkcyBhbnN3ZXIgYXJyYXkgZWxlbWVudHMgdG8gdGhlIGJ1dHRvbnNcbiAgICAgICRidXR0b24xLmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1swXSk7XG4gICAgICAkYnV0dG9uMi5odG1sKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbMV0pO1xuICAgICAgJGJ1dHRvbjMuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzWzJdKTtcbiAgICAgICRidXR0b240Lmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1szXSk7XG4gICAgICBxdWVzdGlvbkluZGV4ICsrO1xuXG4gICAgfVxuICB9XG5cbiAgLy8gdGhpcyBmdW5jdGlvbiBjaGVja3MgdGhlIGluZGV4IG9mIHRoZSBidXR0b24gY2xpY2tlZCB3aXRoIHRoZSBpbmRleCBvZiB0aGUgYW5zd2VycyBhcnJheSBhbmQgY29tcGFyZXMgdGhlbS4gSWYgdGhleSBhcmUgdGhlIHNhbWUgaXQgcnVucyB0aGUgbmV4dCBxdWVzdGlvbi4gSWYgbm90IHRoZW4gaXQgdGFrZXMgdGhlIHVzZXIgdG8gdGhlIGdhbWUgb3ZlciBzY3JlZW4uXG4gIGZ1bmN0aW9uIGNoZWNrQnV0dG9ucyAoZSl7XG4gICAgY29uc3QgSXNJdGNvcnJlY3QgPSBxdWVzdGlvbkJhbmtbcmlnaHRJbmRleF07XG4gICAgLy8gcHVzaGVzIHRoZSBxdWVzdGlvbnMgZnJvbSB0aGUgcXVlc3Rpb24gYXJyYXkgaW50byB0aGUgYnV0dG9uc1xuICAgICRidXR0b25zLmh0bWwoSXNJdGNvcnJlY3QuY29ycmVjdEluZGV4W3JpZ2h0SW5kZXhdKTtcblxuICAgIC8vIGNvbXBhcmVzIGJ1dHRvbiBpbmRleCB0byB0aGUgaW5kZXggb2YgY29ycmVjdCBxdWVzdGlvbiAtIGlmIHRoZSBzYW1lID0gbmV4dCBxdWVzdGlvblxuICAgIGlmIChxdWVzdGlvbk9iamVjdC5jb3JyZWN0SW5kZXggPT09ICQoZS50YXJnZXQpLmluZGV4KCkpe1xuICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmchJyk7XG5cbiAgICAgIHNjb3JlICs9IDIwMDtcbiAgICAgICRzY29yZS50ZXh0KHNjb3JlKTtcbiAgICAgIGNvbnNvbGUubG9nKHNjb3JlLCBxdWVzdGlvbkluZGV4KTtcbiAgICAgIHNob3dRdWVzdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5b3UgZGllZCcpO1xuICAgICAgJGluc3RydWN0aW9ucy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZ2FtZU92ZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGdhbWVCb2FyZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICBxdWVzdGlvbkluZGV4ID0gMDtcbiAgICAgIHNjb3JlID0gMDtcbiAgICAgICR2aWRlbzIubG9vcCA9IGZhbHNlO1xuICAgICAgJHZpZGVvMi5zcmMgPSAnc3JjL2Fzc2V0cy9sb3Nlci53ZWJtJztcbiAgICAgICR2aWRlbzIuZ2V0KDApLnBsYXkoKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIGdhbWVib2FyZCBoaWRkZW4gcGhvbmUgYSBmcmllbmQgdW5oaWRkZW5cbiAgZnVuY3Rpb24gaGVscGVyT25lICgpe1xuICAgICRwaG9uZUZyaWVuZC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVCb2FyZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJHZpZGVvMy5nZXQoMCkucGxheSgpO1xuICAgICR2aWRlbzMubG9vcCA9IGZhbHNlO1xuICAgICR2aWRlbzMuc3JjID0gJ3NyYy9hc3NldHMvbWVlc2Vlay53ZWJtJztcblxuICB9XG5cbiAgLy8gZnVuY3Rpb24gYWxlcnRzIGNvcnJlY3QgYW5zd2VyIGFuZCB0aGVuIHNlbmRzIHVzZXIgYmFjayB0byBnYW1lYm9hcmQgLSBidXR0b24gZGlzYWJsZWQgYWZ0ZXIgdXNlXG4gIGZ1bmN0aW9uIG1yTWVlc2Vla3MoKXtcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VyID0gcXVlc3Rpb25PYmplY3QuYW5zd2Vyc1txdWVzdGlvbk9iamVjdC5jb3JyZWN0SW5kZXhdO1xuICAgICRwaG9uZUZyaWVuZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVCb2FyZC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgYWxlcnQoY29ycmVjdEFuc3dlcik7XG4gICAgJGNob2ljZTEucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICBzY29yZSAtPSAxMDA7XG4gICAgJHNjb3JlLnRleHQoc2NvcmUpO1xuICB9XG4vLyBnYW1lIGJvYXJkIGhpZGRlbiBhbmQgNTA6NTAgb3B0aW9uIHByZXNlbnRlZCB3aXRoIHRoZSBxdWVzdGlvbiBhbmQgb25seSB0d28gYnV0dG9uc1xuICBmdW5jdGlvbiBoZWxwZXJUd28oKXtcblxuICAgICRqZXJyaWZpZWQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgJHZpZGVvNC5nZXQoMCkucGxheSgpO1xuICAgICR2aWRlbzQubG9vcCA9IGZhbHNlO1xuICAgICR2aWRlbzQuc3JjID0gJ3NyYy9hc3NldHMvdHdvZG90cy5tcDQnO1xuXG4gICAgJHF1ZXN0aW9uQm94Lmh0bWwocXVlc3Rpb25PYmplY3QucXVlc3Rpb24pO1xuICAgICRqZXJyeTEuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzW3F1ZXN0aW9uT2JqZWN0LmZpZnR5ZmlmdHlbMF1dKTtcbiAgICAkamVycnkyLmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1txdWVzdGlvbk9iamVjdC5maWZ0eWZpZnR5WzFdXSk7XG5cbiAgfVxuLy8gY2hlY2tzIHRoZSBpbmRleCBvZiB0aGUgY2xpY2sgdGFyZ2V0cyAodGhlIGplcnJ5IGJ1dHRvbnMpIHRvIHNlZSBpZiBpdCBtYXRjaGVzIHRoZSBpbmRleCBvZiB0aGUgY29ycmVjdCBhbnN3ZXJcbiAgZnVuY3Rpb24gY2hlY2tGaWZ0eUZpZnR5IChlKXtcblxuICAgIGlmIChxdWVzdGlvbk9iamVjdC5maWZ0eUluZGV4ID09PSAkKGUudGFyZ2V0KS5pbmRleCgnYnV0dG9uLmplcnJ5Jykpe1xuXG4gICAgICAvLyBpZiB5b3UgcGljayB0aGUgY29ycmVjdCA1MDo1MCB5b3UgZ28gYmFjayBpbnRvIHRoZSBnYW1lIGJ1dCB5b3UgZ2V0IGhhbGYgcG9pbnRzXG4gICAgICBjb25zb2xlLmxvZygneW91IGxpdmUnKTtcbiAgICAgICRnYW1lQm9hcmQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGplcnJpZmllZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICBzaG93UXVlc3Rpb24oKTtcbiAgICAgICRjaG9pY2UyLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICBzY29yZSArPSAxMDA7XG4gICAgICAkc2NvcmUudGV4dChzY29yZSk7XG4gICAgICAkdmlkZW80LmdldCgwKS5wYXVzZSgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5b3UgZGllZCcpO1xuICAgICAgLy8gaWYgeW91IGZhaWwgd2l0aCB0aGUgNTA6NTAgaXQgaXMgZ2FtZSBvdmVyXG4gICAgICAkZ2FtZU92ZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGplcnJpZmllZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkdmlkZW80LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIGF1ZGlvLmxvb3AgPSBmYWxzZTtcbiAgICAgIGF1ZGlvLnNyYyA9ICdzcmMvYXNzZXRzL2plcnJ5Lm1wMyc7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAkdmlkZW80LmdldCgwKS5wYXVzZSgpO1xuXG4gICAgICBxdWVzdGlvbkluZGV4ID0gMDtcbiAgICAgIHNjb3JlID0gMDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoZWxwZXJUaHJlZSAoKSB7XG4gICAgJGFza0F1ZGllbmNlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICBzY29yZSAtPSAxMDA7XG4gICAgJHNjb3JlLnRleHQoc2NvcmUpO1xuICAgIGF1ZGlvLmxvb3AgPSBmYWxzZTtcbiAgICBhdWRpby5zcmMgPSAnc3JjL2Fzc2V0cy9ob2xvZ3JhbXMubXAzJztcbiAgICBhdWRpby5wbGF5KCk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVBlcmNlbnRhZ2VzKCkge1xuICAgICAgY29uc3QgcGVyY2VudGFnZXMgPSBbTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKV07XG4gICAgICBjb25zdCB0b3RhbCA9IHBlcmNlbnRhZ2VzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuXG4gICAgICByZXR1cm4gcGVyY2VudGFnZXMubWFwKChwZXJjZW50YWdlKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChwZXJjZW50YWdlIC8gdG90YWwpICogMTAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBhc2tUaGVBdWRpZW5jZSA9IGdlbmVyYXRlUGVyY2VudGFnZXMoKTtcbiAgICBsZXQgdG90YWxQZXJjZW50YWdlcyA9IGFza1RoZUF1ZGllbmNlLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuXG4gICAgd2hpbGUodG90YWxQZXJjZW50YWdlcyAhPT0gMTAwKSB7XG4gICAgICBhc2tUaGVBdWRpZW5jZSA9IGdlbmVyYXRlUGVyY2VudGFnZXMoKTtcbiAgICAgIHRvdGFsUGVyY2VudGFnZXMgPSBhc2tUaGVBdWRpZW5jZS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnQWZ0ZXIgbG9vcCcsIGFza1RoZUF1ZGllbmNlLCB0b3RhbFBlcmNlbnRhZ2VzKTtcblxuICAgIGNvbnN0ICRiYXJzID0gJCgnLmJhcicpO1xuICAgIGNvbnN0ICRyZXN1bHRzID0gJCgnLnJlc3VsdHMgbGknKTtcblxuICAgIGFza1RoZUF1ZGllbmNlLmZvckVhY2goKHBlcmNlbnRhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAkYmFycy5lcShpbmRleCkuY3NzKCdoZWlnaHQnLCBgJHtwZXJjZW50YWdlfSVgKTtcbiAgICAgICRyZXN1bHRzLmVxKGluZGV4KS50ZXh0KGAke3BlcmNlbnRhZ2V9JWApO1xuICAgIH0pO1xuXG4gIH1cblxuICBmdW5jdGlvbiByZXR1cm5Ub0dhbWUgKCkge1xuICAgICRhc2tBdWRpZW5jZS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVCb2FyZC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGNob2ljZTMucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgfVxuXG5cbiAgLy8gY2xpY2sgc3RhcnQgYnV0dG9uIC0gc3RhcnRzIG5ldyBnYW1lXG4gICRzdGFydEJ1dHRvbi5vbignY2xpY2snLCBzdGFydEdhbWUpO1xuXG4gIC8vIHdoZW4gb25lIG9mIHRoZSBjaG9pY2UgYnV0dG9ucyBpcyBjbGlja2VkIC0gY2hlY2sgaWYgYnV0dG9uIGNvbnRhaW5pbmcgY29ycmVjdCBhbnN3ZXIgaXMgY2xpY2tlZFxuICAkYnV0dG9ucy5vbignY2xpY2snLCBjaGVja0J1dHRvbnMpO1xuICAvLyB3aGVuIGhlbHBlcjEgYnV0dG9uKHBob25lIGEgZnJpZW5kKSBpcyBjbGlja2VkIC0gcnVuIE1yIE1lZXNlZWtzXG5cbiAgJGNob2ljZTEub24oJ2NsaWNrJywgaGVscGVyT25lKTtcbiAgLy8gaWYgY2FuIGRvIGJ1dHRvbiBpcyBjbGlja2VkIC0gcnVuIG1yIG1lZXNlZWtzIGZ1bmN0aW9uIGFuZCBmaW5kIG91dCB0aGUgYW5zd2VyICsgcmV0dXJuIHRvIGdhbWUgc2NyZWVuXG4gICRtZWVzZXNlZWtzQnV0dG9uLm9uKCdjbGljaycsIG1yTWVlc2Vla3MpO1xuXG5cbiAgLy9pZiBoZWxwZXIyIGJ1dHRvbig1MDo1MCkgaXMgY2xpY2tlZCBydW4gZmlmdHlmaWZ0eSBmdW5jdGlvblxuICAkY2hvaWNlMi5vbignY2xpY2snLCBoZWxwZXJUd28pO1xuICAvLyBpZiBmaWZ0eSBmaWZ0eSBidXR0b24gaXMgY2xpY2tlZCAtIHJ1biBjaGVjayBmaWZ0eSBmaWZ0eVxuICAkZHVtYkRvd24ub24oJ2NsaWNrJywgY2hlY2tGaWZ0eUZpZnR5KTtcblxuXG4gIC8vIGNsaWNrIG9mIGhlbHBlciB0aHJlZSBydW5zIGFzayB0aGUgYXVkaWVuY2UgcGVyY2VudGFnZXMgZnVuY3Rpb25cbiAgJGNob2ljZTMub24oJ2NsaWNrJywgaGVscGVyVGhyZWUpO1xuICAvLyBjbGljayBvZiBhdWlkZW5jZXJldHVybiBidXR0b24gdGFrZXMgdXNlciBiYWNrIHRvIGdhbWVcbiAgJGF1ZGllbmNlUmV0dXJuLm9uKCdjbGljaycsIHJldHVyblRvR2FtZSk7XG5cblxuICAvLyByZXN0YXJ0cyB0aGUgZ2FtZSBhbmQgc2h1ZmZsZXMgdGhlIHF1ZXN0aW9uc1xuICAkcmVzZXRCdXR0b24ub24oJ2NsaWNrJywgcmVzdGFydEdhbWUpO1xuXG5cbn0pO1xuIl19
