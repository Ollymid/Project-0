"use strict";$(function(){function e(){y.addClass("hidden"),k.removeClass("hidden"),M.prop("disabled",!1),B.prop("disabled",!1),j.prop("disabled",!1),s(),f.loop=!1,f.src="src/assets/ShowMeWhatYouGot.mp3",f.play(),N=K>N?K:N,m.text(N),K=0,p.text(K)}function o(){y.removeClass("hidden"),x.addClass("hidden"),I.addClass("hidden"),M.prop("disabled",!1),B.prop("disabled",!1),j.prop("disabled",!1),s(),shuffle(questionBank)}function s(){O=questionBank[F],15===F?(y.addClass("hidden"),I.addClass("hidden"),k.addClass("hidden"),x.removeClass("hidden"),F=0,N=K>N?K:N,f.loop=!1,f.src="src/assets/WubbaLubba.mp3",f.play(),C.get(0).play(),C.loop=!1,C.src="src/assets/winner.webm",m.text(N),localStorage.setItem("highScore",N)):(u.html(O.question),E.html(O.answers[0]),G.html(O.answers[1]),J.html(O.answers[2]),L.html(O.answers[3]),F++)}function d(e){var o=questionBank[H];Q.html(o.correctIndex[H]),O.correctIndex===$(e.target).index()?(console.log("working!"),K+=200,p.text(K),console.log(K),s()):(console.log("you died"),y.addClass("hidden"),I.removeClass("hidden"),k.addClass("hidden"),F=0,K=0,v.loop=!1,v.src="src/assets/loser.webm",v.get(0).play())}function n(){w.removeClass("hidden"),k.addClass("hidden"),g.get(0).play(),g.loop=!1,g.src="src/assets/meeseek.webm"}function t(){var e=O.answers[O.correctIndex];w.addClass("hidden"),k.removeClass("hidden"),alert(e),M.prop("disabled",!0),K-=100,p.text(K)}function a(){q.removeClass("hidden"),k.addClass("hidden"),b.get(0).play(),b.loop=!1,b.src="src/assets/twodots.mp4",u.html(O.question),W.html(O.answers[O.fiftyfifty[0]]),A.html(O.answers[O.fiftyfifty[1]])}function r(e){O.fiftyIndex===$(e.target).index("button.jerry")?(console.log("you live"),k.removeClass("hidden"),q.addClass("hidden"),s(),B.prop("disabled",!0),K+=100,p.text(K)):(console.log("you died"),I.removeClass("hidden"),q.addClass("hidden"),v.addClass("hidden"),f.loop=!1,f.src="src/assets/jerry.mp3",f.play(),F=0,K=0)}function l(){function e(){var e=[Math.random(),Math.random(),Math.random(),Math.random()],o=e.reduce(function(e,o){return e+o});return e.map(function(e){return Math.round(e/o*100)})}S.removeClass("hidden"),k.addClass("hidden"),K-=100,p.text(K),f.loop=!1,f.src="src/assets/holograms.mp3",f.play();for(var o=e(),s=o.reduce(function(e,o){return e+o});100!==s;)o=e(),s=o.reduce(function(e,o){return e+o});console.log("After loop",o,s);var d=$(".bar"),n=$(".results li");o.forEach(function(e,o){d.eq(o).css("height",e+"%"),n.eq(o).text(e+"%")})}function i(){S.addClass("hidden"),k.removeClass("hidden"),j.prop("disabled",!0)}console.log("JS loaded!");var c=$(".start-button"),h=$(".reset-button"),u=$(".currentQ"),p=$(".score"),m=$(".high-score"),f=document.querySelector("audio"),C=$("#video1"),v=$("#video2"),g=$("#video3"),b=$("#video4"),y=$("#start"),x=$("#well-done"),k=$("#game-board"),w=$("#meeseeks-box"),q=$("#fifty-fifty"),S=$("#council"),I=$("#game-over"),M=$(".choice1"),B=$(".choice2"),j=$(".choice3"),W=$("#choice1"),A=$("#choice2"),E=$(".option1"),G=$(".option2"),J=$(".option3"),L=$(".option4"),Q=$(".answer"),Y=$(".meeseseeksButton"),z=$(".jerry"),D=$(".collectionofdouches"),F=0,H=0,K=0;p.text(K);var N=localStorage.getItem("highScore")||0;m.text(N);var O=null;c.on("click",e),Q.on("click",d),M.on("click",n),Y.on("click",t),B.on("click",a),z.on("click",r),j.on("click",l),D.on("click",i),h.on("click",o)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwic3RhcnRHYW1lIiwiJGluc3RydWN0aW9ucyIsImFkZENsYXNzIiwiJGdhbWVCb2FyZCIsInJlbW92ZUNsYXNzIiwiJGNob2ljZTEiLCJwcm9wIiwiJGNob2ljZTIiLCIkY2hvaWNlMyIsInNob3dRdWVzdGlvbiIsImF1ZGlvIiwibG9vcCIsInNyYyIsInBsYXkiLCIkaGlnaFNjb3JlIiwidGV4dCIsImhpZ2hTY29yZSIsInNjb3JlIiwiJHNjb3JlIiwiJHdlbGxEb25lIiwiJGdhbWVPdmVyIiwic2h1ZmZsZSIsInF1ZXN0aW9uQmFuayIsInF1ZXN0aW9uT2JqZWN0IiwicXVlc3Rpb25JbmRleCIsIiR2aWRlbzEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiJGJ1dHRvbjEiLCJodG1sIiwiYW5zd2VycyIsIiRidXR0b24zIiwiJGJ1dHRvbjQiLCIkYnV0dG9ucyIsIklzSXRjb3JyZWN0IiwicmlnaHRJbmRleCIsImNvcnJlY3RJbmRleCIsImUiLCJ0YXJnZXQiLCJpbmRleCIsImNvbnNvbGUiLCIkdmlkZW8yIiwiZ2V0IiwiJHZpZGVvMyIsIiRwaG9uZUZyaWVuZCIsIm1yTWVlc2Vla3MiLCJjb3JyZWN0QW5zd2VyIiwiYWxlcnQiLCIkamVycmlmaWVkIiwiJHZpZGVvNCIsIiRxdWVzdGlvbkJveCIsIiRqZXJyeTIiLCJxdWVzdGlvbiIsIiRqZXJyeTEiLCJmaWZ0eUluZGV4IiwiZmlmdHlmaWZ0eSIsImxvZyIsImhlbHBlclRocmVlIiwiJGFza0F1ZGllbmNlIiwiZ2VuZXJhdGVQZXJjZW50YWdlcyIsInBlcmNlbnRhZ2VzIiwiTWF0aCIsInJhbmRvbSIsInRvdGFsIiwicmVkdWNlIiwiYSIsImIiLCJ0b3RhbFBlcmNlbnRhZ2VzIiwiYXNrVGhlQXVkaWVuY2UiLCJyb3VuZCIsInBlcmNlbnRhZ2UiLCIkYmFycyIsImZvckVhY2giLCIkcmVzdWx0cyIsImVxIiwiY3NzIiwiJHN0YXJ0QnV0dG9uIiwiJHJlc2V0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIiRidXR0b24yIiwiJG1lZXNlc2Vla3NCdXR0b24iLCIkZHVtYkRvd24iLCIkYXVkaWVuY2VSZXR1cm4iLCJnZXRJdGVtIiwib24iLCJjaGVja0J1dHRvbnMiLCJoZWxwZXJPbmUiLCJjaGVja0ZpZnR5RmlmdHkiLCJyZXR1cm5Ub0dhbWUiLCJyZXN0YXJ0R2FtZSJdLCJtYXBwaW5ncyI6IllBQ0FBLEdBQUUsV0FpREEsUUFBU0MsS0FDUEMsRUFBY0MsU0FBUyxVQUN2QkMsRUFBV0MsWUFBWSxVQUN2QkMsRUFBU0MsS0FBSyxZQUFZLEdBQzFCQyxFQUFTRCxLQUFLLFlBQVksR0FDMUJFLEVBQVNGLEtBQUssWUFBWSxHQUMxQkcsSUFDQUMsRUFBTUMsTUFBTyxFQUNiRCxFQUFNRSxJQUFNLGtDQUNaRixFQUFNRyxPQUlOQyxFQUFXQyxFQUFLQyxFQUFoQkMsRUFBQUQsRUFDQUMsRUFBQUYsS0FBQUMsR0FDQUUsRUFBT0gsRUFDUkcsRUFBQUgsS0FBQUUsR0FHQ2hCLFFBQUFBLEtBQ0FrQixFQUFVakIsWUFBUyxVQUNuQmtCLEVBQVVsQixTQUFTLFVBQ25CRyxFQUFTQyxTQUFLLFVBQ2RDLEVBQVNELEtBQUssWUFBWSxHQUMxQkUsRUFBU0YsS0FBSyxZQUFZLEdBQzFCRyxFQUFBQSxLQUFBQSxZQUFBQSxHQUNBWSxJQUVEQSxRQUFBQyxjQUVELFFBQVNiLEtBR1BjLEVBQUFELGFBQUFFLEdBR3FCLEtBQW5CSixHQUNBakIsRUFBV0QsU0FBUyxVQUNwQmlCLEVBQVVmLFNBQUFBLFVBQ1ZvQixFQUFBQSxTQUFBLFVBQ0FSLEVBQUFBLFlBQW9CQSxVQUNwQk4sRUFBYSxFQUNiQSxFQUFZTyxFQUFBRCxFQUFBQyxFQUFaRCxFQUNBTixFQUFNRyxNQUFOLEVBQ0FZLEVBQUFBLElBQVksNEJBQ1pBLEVBQUFBLE9BQ0FBLEVBQVFiLElBQVIsR0FBY0MsT0FDZEMsRUFBQUEsTUFBQSxFQUNBWSxFQUFBQSxJQUFhQyx5QkFDYmIsRUFBQUMsS0FBQUMsR0FmRlUsYUFnQk9D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bkYsRUFBQSx3QkFDdEJ5QixFQUFnQixFQUNkVyxFQUFOLEVBQ0lsQixFQUFRLENBQ1pDLEdBQU9ILEtBQUtFLEVBRVosSUFBSUQsR0FBWVUsYUFBYXlELFFBQVEsY0FBZ0IsQ0FDckRyRSxHQUFXQyxLQUFLQyxFQUVoQixJQUFJTyxHQUFpQixJQStNckJxRCxHQUFBUSxHQUFBLFFBQUFwRixHQUdBaUMsRUFBQW1ELEdBQUEsUUFBQUMsR0FJQWhGLEVBQUErRSxHQUFBLFFBQUFFLEdBRUFOLEVBQUFJLEdBQUEsUUFBQXZDLEdBS0FyQyxFQUFTNEUsR0FBRyxRQUFTM0IsR0FFckJ5QixFQUFBQSxHQUFBQSxRQUFtQkssR0E5UXJCL0UsRUFBQTRFLEdBQUEsUUFBQTNCLEdBOFFFeUIsRUFBZ0JFLEdBQUcsUUFBU0ksR0FJNUJYLEVBQWFPLEdBQUcsUUFBU0siLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFraW5nIGNoYW5nZXMgZm9yIGluaXRpYWwgY29tbWl0XG4kKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTIGxvYWRlZCEnKTtcblxuXG4gIGNvbnN0ICRzdGFydEJ1dHRvbiA9ICQoJy5zdGFydC1idXR0b24nKTtcbiAgY29uc3QgJHJlc2V0QnV0dG9uID0gJCgnLnJlc2V0LWJ1dHRvbicpO1xuICBjb25zdCAkcXVlc3Rpb25Cb3ggPSAkKCcuY3VycmVudFEnKTtcbiAgY29uc3QgJHNjb3JlID0gJCgnLnNjb3JlJyk7XG4gIGNvbnN0ICRoaWdoU2NvcmUgPSAkKCcuaGlnaC1zY29yZScpO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F1ZGlvJyk7XG5cbiAgY29uc3QgJHZpZGVvMSA9ICQoJyN2aWRlbzEnKTtcbiAgY29uc3QgJHZpZGVvMiA9ICQoJyN2aWRlbzInKTtcbiAgY29uc3QgJHZpZGVvMyA9ICQoJyN2aWRlbzMnKTtcbiAgY29uc3QgJHZpZGVvNCA9ICQoJyN2aWRlbzQnKTtcblxuICBjb25zdCAkaW5zdHJ1Y3Rpb25zID0gJCgnI3N0YXJ0Jyk7XG4gIGNvbnN0ICR3ZWxsRG9uZSA9ICQoJyN3ZWxsLWRvbmUnKTtcbiAgY29uc3QgJGdhbWVCb2FyZCA9ICQoJyNnYW1lLWJvYXJkJyk7XG4gIGNvbnN0ICRwaG9uZUZyaWVuZCA9ICQoJyNtZWVzZWVrcy1ib3gnKTtcbiAgY29uc3QgJGplcnJpZmllZCA9ICQoJyNmaWZ0eS1maWZ0eScpO1xuICBjb25zdCAkYXNrQXVkaWVuY2UgPSAkKCcjY291bmNpbCcpO1xuICBjb25zdCAkZ2FtZU92ZXIgPSAkKCcjZ2FtZS1vdmVyJyk7XG5cbiAgY29uc3QgJGNob2ljZTEgPSAkKCcuY2hvaWNlMScpO1xuICBjb25zdCAkY2hvaWNlMiA9ICQoJy5jaG9pY2UyJyk7XG4gIGNvbnN0ICRjaG9pY2UzID0gJCgnLmNob2ljZTMnKTtcbiAgY29uc3QgJGplcnJ5MSA9ICQoJyNjaG9pY2UxJyk7XG4gIGNvbnN0ICRqZXJyeTIgPSAkKCcjY2hvaWNlMicpO1xuXG5cbiAgY29uc3QgJGJ1dHRvbjEgPSAkKCcub3B0aW9uMScpO1xuICBjb25zdCAkYnV0dG9uMiA9ICQoJy5vcHRpb24yJyk7XG4gIGNvbnN0ICRidXR0b24zID0gJCgnLm9wdGlvbjMnKTtcbiAgY29uc3QgJGJ1dHRvbjQgPSAkKCcub3B0aW9uNCcpO1xuICBjb25zdCAkYnV0dG9ucyA9ICQoJy5hbnN3ZXInKTtcbiAgY29uc3QgJG1lZXNlc2Vla3NCdXR0b24gPSAkKCcubWVlc2VzZWVrc0J1dHRvbicpO1xuICBjb25zdCAkZHVtYkRvd24gPSAkKCcuamVycnknKTtcbiAgY29uc3QgJGF1ZGllbmNlUmV0dXJuID0gJCgnLmNvbGxlY3Rpb25vZmRvdWNoZXMnKTtcbiAgbGV0IHF1ZXN0aW9uSW5kZXggPSAwO1xuICBjb25zdCByaWdodEluZGV4ID0gMDtcbiAgbGV0IHNjb3JlID0gMDtcbiAgJHNjb3JlLnRleHQoc2NvcmUpO1xuXG4gIGxldCBoaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJykgfHwgMDtcbiAgJGhpZ2hTY29yZS50ZXh0KGhpZ2hTY29yZSk7XG5cbiAgbGV0IHF1ZXN0aW9uT2JqZWN0ID0gbnVsbDtcblxuICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgJGluc3RydWN0aW9ucy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgJGdhbWVCb2FyZC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGNob2ljZTEucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgJGNob2ljZTIucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgJGNob2ljZTMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgc2hvd1F1ZXN0aW9uKCk7XG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgIGF1ZGlvLnNyYyA9ICdzcmMvYXNzZXRzL1Nob3dNZVdoYXRZb3VHb3QubXAzJztcbiAgICBhdWRpby5wbGF5KCk7XG5cblxuICAgIGhpZ2hTY29yZSA9IHNjb3JlID4gaGlnaFNjb3JlID8gc2NvcmUgOiBoaWdoU2NvcmU7XG4gICAgJGhpZ2hTY29yZS50ZXh0KGhpZ2hTY29yZSk7XG4gICAgc2NvcmUgPSAwO1xuICAgICRzY29yZS50ZXh0KHNjb3JlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RhcnRHYW1lKCl7XG4gICAgJGluc3RydWN0aW9ucy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJHdlbGxEb25lLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZU92ZXIuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRjaG9pY2UxLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UyLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICRjaG9pY2UzLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIHNob3dRdWVzdGlvbigpO1xuICAgIHNodWZmbGUocXVlc3Rpb25CYW5rKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1F1ZXN0aW9uKCkge1xuICAgIHF1ZXN0aW9uT2JqZWN0ID0gcXVlc3Rpb25CYW5rW3F1ZXN0aW9uSW5kZXhdO1xuXG4gICAgLy8gaWYgdGhlIG51bWJlciBvZiBxdWVzdGlvbnMgaW5kZXggPSAxNSAtIHNlbmRzIHVzZXIgdG8gd2VsbCBkb25lIHNjcmVlblxuICAgIGlmIChxdWVzdGlvbkluZGV4ID09PSAxNSl7XG4gICAgICAkaW5zdHJ1Y3Rpb25zLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRnYW1lT3Zlci5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICR3ZWxsRG9uZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICBxdWVzdGlvbkluZGV4ID0gMDtcbiAgICAgIGhpZ2hTY29yZSA9IHNjb3JlID4gaGlnaFNjb3JlID8gc2NvcmUgOiBoaWdoU2NvcmU7XG4gICAgICBhdWRpby5sb29wID0gZmFsc2U7XG4gICAgICBhdWRpby5zcmMgPSAnc3JjL2Fzc2V0cy9XdWJiYUx1YmJhLm1wMyc7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICAkdmlkZW8xLmdldCgwKS5wbGF5KCk7XG4gICAgICAkdmlkZW8xLmxvb3AgPSBmYWxzZTtcbiAgICAgICR2aWRlbzEuc3JjID0gJ3NyYy9hc3NldHMvd2lubmVyLndlYm0nO1xuICAgICAgJGhpZ2hTY29yZS50ZXh0KGhpZ2hTY29yZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgaGlnaFNjb3JlKTtcbiAgICAgIC8vIGVsc2UgaXQgY2FycnlzIG9uIHRoZSBnYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vICBhZGRzIHF1ZXN0aW9uIHByb3BlcnR5IHRvIHRoZSBxdWVzdGlvbiBib3hcbiAgICAgICRxdWVzdGlvbkJveC5odG1sKHF1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9uKTtcbiAgICAgIC8vIGFuZCBhZGRzIGFuc3dlciBhcnJheSBlbGVtZW50cyB0byB0aGUgYnV0dG9uc1xuICAgICAgJGJ1dHRvbjEuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzWzBdKTtcbiAgICAgICRidXR0b24yLmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1sxXSk7XG4gICAgICAkYnV0dG9uMy5odG1sKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbMl0pO1xuICAgICAgJGJ1dHRvbjQuaHRtbChxdWVzdGlvbk9iamVjdC5hbnN3ZXJzWzNdKTtcbiAgICAgIHF1ZXN0aW9uSW5kZXggKys7XG5cbiAgICB9XG4gIH1cblxuICAvLyB0aGlzIGZ1bmN0aW9uIGNoZWNrcyB0aGUgaW5kZXggb2YgdGhlIGJ1dHRvbiBjbGlja2VkIHdpdGggdGhlIGluZGV4IG9mIHRoZSBhbnN3ZXJzIGFycmF5IGFuZCBjb21wYXJlcyB0aGVtLiBJZiB0aGV5IGFyZSB0aGUgc2FtZSBpdCBydW5zIHRoZSBuZXh0IHF1ZXN0aW9uLiBJZiBub3QgdGhlbiBpdCB0YWtlcyB0aGUgdXNlciB0byB0aGUgZ2FtZSBvdmVyIHNjcmVlbi5cbiAgZnVuY3Rpb24gY2hlY2tCdXR0b25zIChlKXtcbiAgICBjb25zdCBJc0l0Y29ycmVjdCA9IHF1ZXN0aW9uQmFua1tyaWdodEluZGV4XTtcbiAgICAvLyBwdXNoZXMgdGhlIHF1ZXN0aW9ucyBmcm9tIHRoZSBxdWVzdGlvbiBhcnJheSBpbnRvIHRoZSBidXR0b25zXG4gICAgJGJ1dHRvbnMuaHRtbChJc0l0Y29ycmVjdC5jb3JyZWN0SW5kZXhbcmlnaHRJbmRleF0pO1xuXG4gICAgLy8gY29tcGFyZXMgYnV0dG9uIGluZGV4IHRvIHRoZSBpbmRleCBvZiBjb3JyZWN0IHF1ZXN0aW9uIC0gaWYgdGhlIHNhbWUgPSBuZXh0IHF1ZXN0aW9uXG4gICAgaWYgKHF1ZXN0aW9uT2JqZWN0LmNvcnJlY3RJbmRleCA9PT0gJChlLnRhcmdldCkuaW5kZXgoKSl7XG4gICAgICBjb25zb2xlLmxvZygnd29ya2luZyEnKTtcblxuICAgICAgc2NvcmUgKz0gMjAwO1xuICAgICAgJHNjb3JlLnRleHQoc2NvcmUpO1xuICAgICAgY29uc29sZS5sb2coc2NvcmUpOyBzaG93UXVlc3Rpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygneW91IGRpZWQnKTtcbiAgICAgICRpbnN0cnVjdGlvbnMuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGdhbWVPdmVyLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRnYW1lQm9hcmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgcXVlc3Rpb25JbmRleCA9IDA7XG4gICAgICBzY29yZSA9IDA7XG4gICAgICAkdmlkZW8yLmxvb3AgPSBmYWxzZTtcbiAgICAgICR2aWRlbzIuc3JjID0gJ3NyYy9hc3NldHMvbG9zZXIud2VibSc7XG4gICAgICAkdmlkZW8yLmdldCgwKS5wbGF5KCk7XG4gICAgfVxuXG4gIH1cblxuICAvLyBnYW1lYm9hcmQgaGlkZGVuIHBob25lIGEgZnJpZW5kIHVuaGlkZGVuXG4gIGZ1bmN0aW9uIGhlbHBlck9uZSAoKXtcbiAgICAkcGhvbmVGcmllbmQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICR2aWRlbzMuZ2V0KDApLnBsYXkoKTtcbiAgICAkdmlkZW8zLmxvb3AgPSBmYWxzZTtcbiAgICAkdmlkZW8zLnNyYyA9ICdzcmMvYXNzZXRzL21lZXNlZWsud2VibSc7XG5cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGFsZXJ0cyBjb3JyZWN0IGFuc3dlciBhbmQgdGhlbiBzZW5kcyB1c2VyIGJhY2sgdG8gZ2FtZWJvYXJkIC0gYnV0dG9uIGRpc2FibGVkIGFmdGVyIHVzZVxuICBmdW5jdGlvbiBtck1lZXNlZWtzKCl7XG4gICAgY29uc3QgY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbcXVlc3Rpb25PYmplY3QuY29ycmVjdEluZGV4XTtcbiAgICAkcGhvbmVGcmllbmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGFsZXJ0KGNvcnJlY3RBbnN3ZXIpO1xuICAgICRjaG9pY2UxLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgc2NvcmUgLT0gMTAwO1xuICAgICRzY29yZS50ZXh0KHNjb3JlKTtcbiAgfVxuLy8gZ2FtZSBib2FyZCBoaWRkZW4gYW5kIDUwOjUwIG9wdGlvbiBwcmVzZW50ZWQgd2l0aCB0aGUgcXVlc3Rpb24gYW5kIG9ubHkgdHdvIGJ1dHRvbnNcbiAgZnVuY3Rpb24gaGVscGVyVHdvKCl7XG5cbiAgICAkamVycmlmaWVkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcblxuICAgICR2aWRlbzQuZ2V0KDApLnBsYXkoKTtcbiAgICAkdmlkZW80Lmxvb3AgPSBmYWxzZTtcbiAgICAkdmlkZW80LnNyYyA9ICdzcmMvYXNzZXRzL3R3b2RvdHMubXA0JztcblxuICAgICRxdWVzdGlvbkJveC5odG1sKHF1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9uKTtcbiAgICAkamVycnkxLmh0bWwocXVlc3Rpb25PYmplY3QuYW5zd2Vyc1txdWVzdGlvbk9iamVjdC5maWZ0eWZpZnR5WzBdXSk7XG4gICAgJGplcnJ5Mi5odG1sKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnNbcXVlc3Rpb25PYmplY3QuZmlmdHlmaWZ0eVsxXV0pO1xuXG4gIH1cbi8vIGNoZWNrcyB0aGUgaW5kZXggb2YgdGhlIGNsaWNrIHRhcmdldHMgKHRoZSBqZXJyeSBidXR0b25zKSB0byBzZWUgaWYgaXQgbWF0Y2hlcyB0aGUgaW5kZXggb2YgdGhlIGNvcnJlY3QgYW5zd2VyXG4gIGZ1bmN0aW9uIGNoZWNrRmlmdHlGaWZ0eSAoZSl7XG5cbiAgICBpZiAocXVlc3Rpb25PYmplY3QuZmlmdHlJbmRleCA9PT0gJChlLnRhcmdldCkuaW5kZXgoJ2J1dHRvbi5qZXJyeScpKXtcblxuICAgICAgLy8gaWYgeW91IHBpY2sgdGhlIGNvcnJlY3QgNTA6NTAgeW91IGdvIGJhY2sgaW50byB0aGUgZ2FtZSBidXQgeW91IGdldCBoYWxmIHBvaW50c1xuICAgICAgY29uc29sZS5sb2coJ3lvdSBsaXZlJyk7XG4gICAgICAkZ2FtZUJvYXJkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRqZXJyaWZpZWQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgc2hvd1F1ZXN0aW9uKCk7XG4gICAgICAkY2hvaWNlMi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgc2NvcmUgKz0gMTAwO1xuICAgICAgJHNjb3JlLnRleHQoc2NvcmUpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd5b3UgZGllZCcpO1xuICAgICAgLy8gaWYgeW91IGZhaWwgd2l0aCB0aGUgNTA6NTAgaXQgaXMgZ2FtZSBvdmVyXG4gICAgICAkZ2FtZU92ZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgJGplcnJpZmllZC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkdmlkZW8yLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIGF1ZGlvLmxvb3AgPSBmYWxzZTtcbiAgICAgIGF1ZGlvLnNyYyA9ICdzcmMvYXNzZXRzL2plcnJ5Lm1wMyc7XG4gICAgICBhdWRpby5wbGF5KCk7XG5cbiAgICAgIHF1ZXN0aW9uSW5kZXggPSAwO1xuICAgICAgc2NvcmUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhlbHBlclRocmVlICgpIHtcbiAgICAkYXNrQXVkaWVuY2UucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRnYW1lQm9hcmQuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHNjb3JlIC09IDEwMDtcbiAgICAkc2NvcmUudGV4dChzY29yZSk7XG4gICAgYXVkaW8ubG9vcCA9IGZhbHNlO1xuICAgIGF1ZGlvLnNyYyA9ICdzcmMvYXNzZXRzL2hvbG9ncmFtcy5tcDMnO1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUGVyY2VudGFnZXMoKSB7XG4gICAgICBjb25zdCBwZXJjZW50YWdlcyA9IFtNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpXTtcbiAgICAgIGNvbnN0IHRvdGFsID0gcGVyY2VudGFnZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG5cbiAgICAgIHJldHVybiBwZXJjZW50YWdlcy5tYXAoKHBlcmNlbnRhZ2UpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKHBlcmNlbnRhZ2UgLyB0b3RhbCkgKiAxMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGFza1RoZUF1ZGllbmNlID0gZ2VuZXJhdGVQZXJjZW50YWdlcygpO1xuICAgIGxldCB0b3RhbFBlcmNlbnRhZ2VzID0gYXNrVGhlQXVkaWVuY2UucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XG5cbiAgICB3aGlsZSh0b3RhbFBlcmNlbnRhZ2VzICE9PSAxMDApIHtcbiAgICAgIGFza1RoZUF1ZGllbmNlID0gZ2VuZXJhdGVQZXJjZW50YWdlcygpO1xuICAgICAgdG90YWxQZXJjZW50YWdlcyA9IGFza1RoZUF1ZGllbmNlLnJlZHVjZSgoYSwgYikgPT4gYSArIGIpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdBZnRlciBsb29wJywgYXNrVGhlQXVkaWVuY2UsIHRvdGFsUGVyY2VudGFnZXMpO1xuXG4gICAgY29uc3QgJGJhcnMgPSAkKCcuYmFyJyk7XG4gICAgY29uc3QgJHJlc3VsdHMgPSAkKCcucmVzdWx0cyBsaScpO1xuXG4gICAgYXNrVGhlQXVkaWVuY2UuZm9yRWFjaCgocGVyY2VudGFnZSwgaW5kZXgpID0+IHtcbiAgICAgICRiYXJzLmVxKGluZGV4KS5jc3MoJ2hlaWdodCcsIGAke3BlcmNlbnRhZ2V9JWApO1xuICAgICAgJHJlc3VsdHMuZXEoaW5kZXgpLnRleHQoYCR7cGVyY2VudGFnZX0lYCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHJldHVyblRvR2FtZSAoKSB7XG4gICAgJGFza0F1ZGllbmNlLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZ2FtZUJvYXJkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkY2hvaWNlMy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9XG5cblxuICAvLyBjbGljayBzdGFydCBidXR0b24gLSBzdGFydHMgbmV3IGdhbWVcbiAgJHN0YXJ0QnV0dG9uLm9uKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbiAgLy8gd2hlbiBvbmUgb2YgdGhlIGNob2ljZSBidXR0b25zIGlzIGNsaWNrZWQgLSBjaGVjayBpZiBidXR0b24gY29udGFpbmluZyBjb3JyZWN0IGFuc3dlciBpcyBjbGlja2VkXG4gICRidXR0b25zLm9uKCdjbGljaycsIGNoZWNrQnV0dG9ucyk7XG4gIC8vIHdoZW4gaGVscGVyMSBidXR0b24ocGhvbmUgYSBmcmllbmQpIGlzIGNsaWNrZWQgLSBydW4gTXIgTWVlc2Vla3NcblxuICAkY2hvaWNlMS5vbignY2xpY2snLCBoZWxwZXJPbmUpO1xuICAvLyBpZiBjYW4gZG8gYnV0dG9uIGlzIGNsaWNrZWQgLSBydW4gbXIgbWVlc2Vla3MgZnVuY3Rpb24gYW5kIGZpbmQgb3V0IHRoZSBhbnN3ZXIgKyByZXR1cm4gdG8gZ2FtZSBzY3JlZW5cbiAgJG1lZXNlc2Vla3NCdXR0b24ub24oJ2NsaWNrJywgbXJNZWVzZWVrcyk7XG5cblxuICAvL2lmIGhlbHBlcjIgYnV0dG9uKDUwOjUwKSBpcyBjbGlja2VkIHJ1biBmaWZ0eWZpZnR5IGZ1bmN0aW9uXG4gICRjaG9pY2UyLm9uKCdjbGljaycsIGhlbHBlclR3byk7XG4gIC8vIGlmIGZpZnR5IGZpZnR5IGJ1dHRvbiBpcyBjbGlja2VkIC0gcnVuIGNoZWNrIGZpZnR5IGZpZnR5XG4gICRkdW1iRG93bi5vbignY2xpY2snLCBjaGVja0ZpZnR5RmlmdHkpO1xuXG5cbiAgLy8gY2xpY2sgb2YgaGVscGVyIHRocmVlIHJ1bnMgYXNrIHRoZSBhdWRpZW5jZSBwZXJjZW50YWdlcyBmdW5jdGlvblxuICAkY2hvaWNlMy5vbignY2xpY2snLCBoZWxwZXJUaHJlZSk7XG4gIC8vIGNsaWNrIG9mIGF1aWRlbmNlcmV0dXJuIGJ1dHRvbiB0YWtlcyB1c2VyIGJhY2sgdG8gZ2FtZVxuICAkYXVkaWVuY2VSZXR1cm4ub24oJ2NsaWNrJywgcmV0dXJuVG9HYW1lKTtcblxuXG4gIC8vIHJlc3RhcnRzIHRoZSBnYW1lIGFuZCBzaHVmZmxlcyB0aGUgcXVlc3Rpb25zXG4gICRyZXNldEJ1dHRvbi5vbignY2xpY2snLCByZXN0YXJ0R2FtZSk7XG5cblxufSk7XG4iXX0=
